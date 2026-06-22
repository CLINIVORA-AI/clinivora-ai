/** Layered ambient background: grid + aurora orbs + noise. */
export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <div
        className="absolute -left-32 top-32 h-[420px] w-[420px] rounded-full blur-3xl animate-float-orb opacity-60"
        style={{ background: "radial-gradient(circle, var(--primary-glow), transparent 65%)" }}
      />
      <div
        className="absolute right-[-120px] top-[40%] h-[480px] w-[480px] rounded-full blur-3xl animate-float-orb opacity-50"
        style={{ background: "radial-gradient(circle, var(--secondary-glow), transparent 65%)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-160px] left-1/3 h-[500px] w-[500px] rounded-full blur-3xl animate-float-orb opacity-40"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 65%)", animationDelay: "-3s" }}
      />
      <div
        className="absolute inset-0 noise"
      />
      {/* top/bottom fades */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[color:var(--background)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[color:var(--background)] to-transparent" />
    </div>
  );
}
