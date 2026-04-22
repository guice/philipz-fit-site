/* ==========================================================================
   PIPELINE SECTION — CPZ Fitness "Spartan Engineer" design
   Rendered as a CI/CD deployment pipeline — horizontal flow on wide screens,
   vertical stacked list on narrow screens. No awkward partial-row grids.
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const stages = [
  {
    number: "01",
    command: "git clone",
    status: "passed",
    icon: "⎘",
    title: "Assessment",
    description: "We audit your current codebase: body composition, movement patterns, nutrition habits, sleep, stress. No judgment — just data.",
    checks: ["Body composition analysis", "Movement screening", "Nutrition & habit audit", "Goal architecture"],
  },
  {
    number: "02",
    command: "npm run build",
    status: "passed",
    icon: "⚙",
    title: "Custom Programming",
    description: "Your training and nutrition plan, written specifically for your schedule, equipment, and level. No copy-paste templates.",
    checks: ["Personalized training splits", "Macro-calibrated nutrition", "Progressive overload mapping", "Schedule-aware programming"],
  },
  {
    number: "03",
    command: "npm test",
    status: "running",
    icon: "▶",
    title: "Execute & Iterate",
    description: "Weekly check-ins are our CI pipeline. We review metrics, adjust variables, and catch regressions before they compound.",
    checks: ["Weekly video check-ins", "Form review & correction", "Biometric tracking", "Program adjustments"],
  },
  {
    number: "04",
    command: "deploy --prod",
    status: "pending",
    icon: "↑",
    title: "Habits Go Live",
    description: "Training becomes automatic. Meal prep is just another cron job. Your new defaults are deployed to production.",
    checks: ["Habit automation systems", "Environmental design", "Accountability frameworks", "Stress management protocols"],
  },
  {
    number: "05",
    command: "monitor --uptime",
    status: "pending",
    icon: "◉",
    title: "Maintain & Scale",
    description: "Long-term monitoring. We prevent drift, handle edge cases (travel, holidays, life), and scale your capacity over time.",
    checks: ["Long-term optimization", "Life event handling", "Performance scaling", "Independence building"],
  },
];

const STATUS_COLORS: Record<string, { dot: string; label: string; bg: string; border: string }> = {
  passed:  { dot: "#4ade80", label: "passed",  bg: "rgba(74,222,128,0.08)",  border: "rgba(74,222,128,0.25)" },
  running: { dot: "#ff8200", label: "running", bg: "rgba(255,130,0,0.08)",   border: "rgba(255,130,0,0.3)" },
  pending: { dot: "#6b7280", label: "pending", bg: "rgba(107,114,128,0.06)", border: "rgba(107,114,128,0.2)" },
};

export default function PipelineSection() {
  const { ref, visible } = useVisible();

  return (
    <section
      id="pipeline"
      ref={ref}
      style={{
        position: "relative",
        padding: "7rem 0",
        backgroundColor: "#1a1d21",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot-grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,130,0,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            marginBottom: "3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="section-label">// pipeline.yml</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                textTransform: "uppercase",
                color: "#f0ede8",
                lineHeight: 1,
                margin: 0,
              }}
            >
              The Geek 2 Greek
              <br />
              <span style={{ color: "#ff8200" }}>Pipeline</span>
            </h2>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.95rem",
                color: "#8a8f96",
                maxWidth: "380px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Your transformation, broken into deployable stages. Each phase builds on the last. No skipping steps. No merge conflicts.
            </p>
          </div>
        </div>

        {/* ── Pipeline runner bar ── */}
        <PipelineRunner visible={visible} />

        {/* ── Stage detail cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1rem",
            marginTop: "2.5rem",
          }}
        >
          {stages.map((stage, i) => (
            <StageCard key={i} stage={stage} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.7s",
          }}
        >
          <a href="#book" className="btn-primary" style={{ fontSize: "1.05rem" }}>
            Start Your Pipeline →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Horizontal pipeline runner (CI/CD style) ── */
function PipelineRunner({ visible }: { visible: boolean }) {
  return (
    <div
      style={{
        backgroundColor: "#0f1012",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "6px",
        padding: "0",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
      }}
    >
      {/* Runner header bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.625rem 1.25rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "rgba(255,255,255,0.02)",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c }} />
          ))}
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8a8f96" }}>
          geek2greek-pipeline.yml — triggered by: new_client_commit
        </span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <div
            style={{
              width: 7, height: 7, borderRadius: "50%",
              backgroundColor: "#ff8200",
              boxShadow: "0 0 6px #ff8200",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#ff8200" }}>
            running
          </span>
        </div>
      </div>

      {/* Stage nodes — horizontal scroll on narrow, wraps on wide */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          overflowX: "auto",
          padding: "1.25rem 1rem",
          gap: "0",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {stages.map((stage, i) => {
          const s = STATUS_COLORS[stage.status];
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              {/* Stage node */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  minWidth: "120px",
                  maxWidth: "140px",
                }}
              >
                {/* Status pill */}
                <div
                  style={{
                    backgroundColor: s.bg,
                    border: `1px solid ${s.border}`,
                    borderRadius: "20px",
                    padding: "0.25rem 0.625rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.6rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: s.dot,
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      width: 5, height: 5, borderRadius: "50%",
                      backgroundColor: s.dot,
                      ...(stage.status === "running" ? { boxShadow: `0 0 5px ${s.dot}` } : {}),
                    }}
                  />
                  {s.label}
                </div>

                {/* Icon box */}
                <div
                  style={{
                    width: 44, height: 44,
                    borderRadius: "8px",
                    backgroundColor: stage.status === "pending" ? "rgba(255,255,255,0.04)" : s.bg,
                    border: `1px solid ${s.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    color: s.dot,
                  }}
                >
                  {stage.icon}
                </div>

                {/* Command */}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: stage.status === "pending" ? "#6b7280" : s.dot,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  $ {stage.command}
                </div>

                {/* Stage name */}
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.72rem",
                    color: stage.status === "pending" ? "#6b7280" : "#f0ede8",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {stage.title}
                </div>
              </div>

              {/* Connector line */}
              {i < stages.length - 1 && (
                <div
                  style={{
                    flex: "1 0 24px",
                    height: "2px",
                    margin: "0 4px",
                    marginBottom: "28px", /* align with icon center */
                    background:
                      stages[i + 1].status === "pending"
                        ? "rgba(107,114,128,0.2)"
                        : `linear-gradient(to right, ${STATUS_COLORS[stage.status].dot}, ${STATUS_COLORS[stages[i + 1].status].dot})`,
                    position: "relative",
                  }}
                >
                  {/* Arrow head */}
                  <div
                    style={{
                      position: "absolute",
                      right: -4,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 0,
                      height: 0,
                      borderTop: "4px solid transparent",
                      borderBottom: "4px solid transparent",
                      borderLeft: `6px solid ${stages[i + 1].status === "pending" ? "rgba(107,114,128,0.3)" : STATUS_COLORS[stages[i + 1].status].dot}`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Individual stage detail card ── */
function StageCard({ stage, index, visible }: { stage: typeof stages[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);
  const s = STATUS_COLORS[stage.status];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#22262b",
        border: `1px solid ${hovered ? s.border : "rgba(255,255,255,0.06)"}`,
        borderTop: `2px solid ${hovered ? s.dot : "rgba(255,255,255,0.1)"}`,
        borderRadius: "4px",
        padding: "1.5rem",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s, border-color 0.2s ease`,
        cursor: "default",
      }}
    >
      {/* Stage number watermark */}
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "4rem",
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          position: "absolute",
          bottom: "0.5rem",
          right: "1rem",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {stage.number}
      </div>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.875rem" }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#6b7280",
          }}
        >
          stage {stage.number}/05
        </div>
        {/* Status badge */}
        <div
          style={{
            backgroundColor: s.bg,
            border: `1px solid ${s.border}`,
            borderRadius: "20px",
            padding: "0.15rem 0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            fontSize: "0.58rem",
            fontFamily: "'JetBrains Mono', monospace",
            color: s.dot,
          }}
        >
          <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: s.dot }} />
          {s.label}
        </div>
      </div>

      {/* Command */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          color: "#4ade80",
          marginBottom: "0.625rem",
        }}
      >
        $ {stage.command}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "1.4rem",
          textTransform: "uppercase",
          color: "#f0ede8",
          marginBottom: "0.75rem",
          lineHeight: 1.1,
        }}
      >
        {stage.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.85rem",
          color: "#8a8f96",
          lineHeight: 1.65,
          marginBottom: "1.25rem",
        }}
      >
        {stage.description}
      </p>

      {/* Checklist */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        {stage.checks.map((check, ci) => (
          <div
            key={ci}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              color: "#6b7280",
            }}
          >
            <span style={{ color: s.dot, flexShrink: 0 }}>✓</span>
            {check}
          </div>
        ))}
      </div>
    </div>
  );
}
