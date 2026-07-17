
-- Admin role infrastructure for privileged reads
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Harden waitlist policies
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist;

-- Replace WITH CHECK (true) with input-validating check
CREATE POLICY "Public can join waitlist with validated input"
ON public.waitlist FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND (organization IS NULL OR length(organization) <= 160)
  AND (role IS NULL OR length(role) <= 120)
  AND (message IS NULL OR length(message) <= 1000)
);

-- Explicit admin-only SELECT so future maintainers don't add a permissive one
CREATE POLICY "Only admins can read waitlist"
ON public.waitlist FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
