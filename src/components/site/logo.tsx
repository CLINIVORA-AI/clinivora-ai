import { motion } from "framer-motion";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative grid place-items-center"
      style={{ width: size, height: size }}
      aria-label="Clinivora AI logo"
    >
      <svg viewBox="0 0 40 40" width={size} height={size} fill="none">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="60%" stopColor="var(--primary-glow)" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="37" height="37" rx="11" stroke="url(#logo-grad)" strokeWidth="1.5" />
        {/* Neural / pulse mark: bracket + heartbeat */}
        <path
          d="M11 20h4l2-5 4 10 2-5h6"
          stroke="url(#logo-grad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="29" cy="20" r="2" fill="url(#logo-grad)" />
      </svg>
    </motion.div>
  );
}
