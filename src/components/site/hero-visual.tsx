import { motion } from "framer-motion";

/**
 * Hero visual: animated medical-intelligence network.
 * Pure SVG — no doctors, no stethoscopes. Neural graph with health-signal pulses.
 */
export function HeroVisual() {
  const nodes = [
    { id: "a", x: 50, y: 80, r: 5, label: "Signals" },
    { id: "b", x: 130, y: 40, r: 4 },
    { id: "c", x: 200, y: 90, r: 6, label: "ML Core" },
    { id: "d", x: 280, y: 50, r: 4 },
    { id: "e", x: 340, y: 120, r: 5, label: "Insight" },
    { id: "f", x: 110, y: 180, r: 4 },
    { id: "g", x: 200, y: 220, r: 5 },
    { id: "h", x: 300, y: 200, r: 4 },
    { id: "i", x: 60, y: 260, r: 3 },
    { id: "j", x: 250, y: 300, r: 4 },
  ];
  const edges: Array<[string, string]> = [
    ["a", "b"], ["a", "c"], ["b", "c"], ["b", "d"], ["c", "d"],
    ["c", "e"], ["d", "e"], ["c", "f"], ["c", "g"], ["e", "h"],
    ["g", "h"], ["f", "g"], ["f", "i"], ["g", "j"], ["h", "j"],
    ["a", "f"], ["e", "j"],
  ];
  const map = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      {/* Orbit rings */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="absolute h-[88%] w-[88%] rounded-full border border-[color:var(--hairline)] animate-spin-slow" />
        <div className="absolute h-[64%] w-[64%] rounded-full border border-[color:var(--hairline)]" />
        <div className="absolute h-[40%] w-[40%] rounded-full border border-[color:var(--primary)]/20" />
      </div>

      {/* Soft orb behind */}
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle at 30% 30%, var(--primary-glow), transparent 65%)" }}
      />

      <svg viewBox="0 0 400 340" className="relative h-full w-full">
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="node-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary-glow)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={map[a].x} y1={map[a].y}
            x2={map[b].x} y2={map[b].y}
            stroke="url(#edge-grad)"
            strokeWidth="0.9"
            strokeOpacity="0.45"
          />
        ))}
        {/* Animated pulses on a few key edges */}
        {edges.slice(0, 6).map(([a, b], i) => (
          <line
            key={`p${i}`}
            x1={map[a].x} y1={map[a].y}
            x2={map[b].x} y2={map[b].y}
            stroke="var(--primary-glow)"
            strokeWidth="1.4"
            className="animate-dash-flow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.id} filter="url(#glow)">
            <circle
              cx={n.x} cy={n.y} r={n.r + 4}
              fill="var(--primary)" opacity="0.12"
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
            <circle cx={n.x} cy={n.y} r={n.r} fill="url(#node-grad)" />
          </g>
        ))}

        {/* Labels */}
        {nodes.filter((n) => n.label).map((n) => (
          <g key={`l-${n.id}`}>
            <rect
              x={n.x + 10} y={n.y - 12}
              width={(n.label!.length * 6.2) + 14} height="20" rx="10"
              fill="var(--surface-strong)" stroke="var(--hairline)"
            />
            <text
              x={n.x + 17} y={n.y + 2}
              fontSize="10" fontFamily="var(--font-sans)"
              fill="var(--foreground)" fontWeight="600"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* ECG signal at bottom */}
        <motion.path
          d="M10 320 L80 320 L100 300 L115 335 L135 290 L155 320 L390 320"
          stroke="var(--primary-glow)" strokeWidth="1.6" fill="none"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
      </svg>
    </div>
  );
}
