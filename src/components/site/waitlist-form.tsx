import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      organization: String(fd.get("organization") ?? ""),
      role: String(fd.get("role") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }
    setLoading(true);
    const payload = {
      name: parsed.data.name,
      email: parsed.data.email.toLowerCase(),
      organization: parsed.data.organization || null,
      role: parsed.data.role || null,
      message: parsed.data.message || null,
    };
    const { error } = await supabase.from("waitlist").insert(payload);
    setLoading(false);
    if (error) {
      if (error.code === "23505" || /duplicate/i.test(error.message)) {
        setErrors({ email: "You're already on the waitlist with this email." });
        toast.error("You're already on the waitlist.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      return;
    }
    setSuccess(true);
    toast.success("You're on the list.");
  }

  if (success) {
    return (
      <div className="glass-strong noise relative overflow-hidden rounded-3xl p-10 text-center animate-reveal">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--primary)]/15 text-[color:var(--primary)]">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
          You're on the list.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-[color:var(--muted-foreground)]">
          Thank you for joining the Clinivora AI early access program. We'll keep
          you updated as new capabilities become available.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass-strong noise relative overflow-hidden rounded-3xl p-6 sm:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-60px] h-64 w-64 rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, var(--primary-glow), transparent 70%)" }}
      />
      <div className="relative grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Ada Lovelace" error={errors.name} required />
        <Field label="Email Address" name="email" type="email" placeholder="you@domain.com" error={errors.email} required />
        <Field label="Organization / University" name="organization" placeholder="Optional" error={errors.organization} />
        <Field label="Role" name="role" placeholder="Optional" error={errors.role} />
        <div className="sm:col-span-2">
          <Field
            label="Message"
            name="message"
            placeholder="Tell us what you're building or interested in (optional)"
            error={errors.message}
            as="textarea"
          />
        </div>
      </div>
      <div className="relative mt-6 flex items-center justify-between gap-4">
        <p className="text-xs text-[color:var(--muted-foreground)]">
          We'll only email you about Clinivora AI early access. No spam.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm font-semibold text-[color:var(--background)] transition-all hover:shadow-lg hover:shadow-[color:var(--primary)]/25 disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {loading ? "Joining…" : "Join Early Access"}
          {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
        </button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, error, required, as = "input",
}: {
  label: string; name: string; type?: string; placeholder?: string;
  error?: string; required?: boolean; as?: "input" | "textarea";
}) {
  const base =
    "w-full rounded-xl border border-[color:var(--hairline)] bg-[color:var(--background)]/60 px-3.5 py-2.5 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)]/70 outline-none transition-all focus:border-[color:var(--primary)]/60 focus:ring-2 focus:ring-[color:var(--primary)]/25";
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium text-[color:var(--muted-foreground)]">
        {label} {required && <span className="text-[color:var(--primary)]">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={base} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={base} />
      )}
      {error && <span className="mt-1 block text-[12px] text-[color:var(--destructive)]">{error}</span>}
    </label>
  );
}
