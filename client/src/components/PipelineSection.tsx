/* ==========================================================================
   PIPELINE SECTION — CPZ Fitness "Spartan Engineer" design
   Vertical deployment pipeline — PHP app → k8s/helm production deploy.
   Horizontal CI/CD runner bar at top, vertical stage list below.
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
    command: "git clone git@philipz.fit:geek2greek.git",
    status: "passed",
    statusLabel: "passed",
    icon: "⎘",
    title: "Assessment",
    description: "We audit your current codebase: body composition, movement patterns, nutrition habits, sleep, stress. No judgment — just data.",
    checks: ["Body composition analysis", "Movement screening", "Nutrition & habit audit", "Goal architecture"],
    tag: "php artisan audit:body",
  },
  {
    number: "02",
    command: "composer install && php artisan program:build",
    status: "passed",
    statusLabel: "passed",
    icon: "⚙",
    title: "Custom Programming",
    description: "Your training and nutrition plan, written specifically for your schedule, equipment, and level. No copy-paste templates.",
    checks: ["Personalized training splits", "Macro-calibrated nutrition", "Progressive overload mapping", "Schedule-aware programming"],
    tag: "php artisan program:generate --custom",
  },
  {
    number: "03",
    command: "php artisan test && helm lint ./geek2greek",
    status: "running",
    statusLabel: "running",
    icon: "▶",
    title: "Execute & Iterate",
    description: "Weekly check-ins are our CI pipeline. We review metrics, adjust variables, and catch regressions before they compound.",
    checks: ["Weekly video check-ins", "Form review & correction", "Biometric tracking", "Program adjustments"],
    tag: "helm upgrade --install --dry-run",
  },
  {
    number: "04",
    command: "helm upgrade geek2greek ./chart --set env=production",
    status: "pending",
    statusLabel: "pending",
    icon: "↑",
    title: "Habits Go Live",
    description: "Training becomes automatic. Meal prep is just another cron job. Your new defaults are deployed to production.",
    checks: ["Habit automation systems", "Environmental design", "Accountability frameworks", "Stress management protocols"],
    tag: "kubectl rollout status deploy/habits",
  },
  {
    number: "05",
    command: "kubectl get pods -n geek2greek --watch",
    status: "pending",
    statusLabel: "pending",
    icon: "◉",
    title: "Maintain & Scale",
    description: "Long-term monitoring. We prevent drift, handle edge cases (travel, holidays, life), and scale your capacity over time.",
    checks: ["Long-term optimization", "Life event handling", "Performance scaling", "Independence building"],
    tag: "helm upgrade --set replicas=∞",
  },
];

const STATUS: Record<string, { dot: string; label: string; bg: string; border: string }> = {
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

        {/* ── CI/CD Runner bar ── */}
        <RunnerBar visible={visible} />

        {/* ── Vertical stage list ── */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {stages.map((stage, i) => (
            <StageRow key={i} stage={stage} index={i} visible={visible} isLast={i === stages.length - 1} />
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

/* ── Horizontal CI/CD runner bar ── */
function RunnerBar({ visible }: { visible: boolean }) {
  return (
    <div
      style={{
        backgroundColor: "#0f1012",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "6px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
      }}
    >
      {/* Runner header */}
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

      {/* Stage nodes — horizontal scroll */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          overflowX: "auto",
          padding: "1.25rem 1rem",
          gap: "0",
          scrollbarWidth: "none",
        }}
      >
        {stages.map((stage, i) => {
          const s = STATUS[stage.status];
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {/* Stage node */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.4rem",
                  minWidth: "110px",
                }}
              >
                <div
                  style={{
                    backgroundColor: s.bg,
                    border: `1px solid ${s.border}`,
                    borderRadius: "20px",
                    padding: "0.2rem 0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.58rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: s.dot,
                    whiteSpace: "nowrap",
                  }}
                >
                  <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: s.dot }} />
                  {s.label}
                </div>
                <div
                  style={{
                    width: 40, height: 40,
                    borderRadius: "8px",
                    backgroundColor: stage.status === "pending" ? "rgba(255,255,255,0.04)" : s.bg,
                    border: `1px solid ${s.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    color: s.dot,
                  }}
                >
                  {stage.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.68rem",
                    color: stage.status === "pending" ? "#6b7280" : "#f0ede8",
                    textAlign: "center",
                  }}
                >
                  {stage.title}
                </div>
              </div>

              {/* Connector */}
              {i < stages.length - 1 && (
                <div
                  style={{
                    flex: "1 0 20px",
                    height: "2px",
                    margin: "0 4px",
                    marginBottom: "20px",
                    background:
                      stages[i + 1].status === "pending"
                        ? "rgba(107,114,128,0.2)"
                        : `linear-gradient(to right, ${STATUS[stage.status].dot}, ${STATUS[stages[i + 1].status].dot})`,
                    position: "relative",
                  }}
                >
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
                      borderLeft: `6px solid ${stages[i + 1].status === "pending" ? "rgba(107,114,128,0.3)" : STATUS[stages[i + 1].status].dot}`,
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

/* ── Vertical stage row ── */
function StageRow({
  stage,
  index,
  visible,
  isLast,
}: {
  stage: typeof stages[0];
  index: number;
  visible: boolean;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(index < 2); // first two open by default
  const s = STATUS[stage.status];

  return (
    <div
      style={{
        display: "flex",
        gap: "0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
      }}
    >
      {/* Left: number column + vertical line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: "52px",
        }}
      >
        {/* Number circle */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: stage.status === "pending" ? "rgba(255,255,255,0.04)" : s.bg,
            border: `2px solid ${s.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "0.9rem",
            color: s.dot,
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {stage.number}
        </div>
        {/* Vertical connector */}
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: "2px",
              background: stage.status === "passed"
                ? `linear-gradient(to bottom, ${s.dot}, rgba(107,114,128,0.3))`
                : "rgba(107,114,128,0.15)",
              minHeight: "2rem",
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div
        style={{
          flex: 1,
          paddingLeft: "1.25rem",
          paddingBottom: isLast ? 0 : "1.75rem",
        }}
      >
        {/* Row header — clickable to expand/collapse */}
        <div
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.875rem",
            cursor: "pointer",
            paddingTop: "0.5rem",
            paddingBottom: expanded ? "1rem" : "0",
            userSelect: "none",
          }}
        >
          {/* Status badge */}
          <div
            style={{
              backgroundColor: s.bg,
              border: `1px solid ${s.border}`,
              borderRadius: "20px",
              padding: "0.2rem 0.55rem",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              fontSize: "0.6rem",
              fontFamily: "'JetBrains Mono', monospace",
              color: s.dot,
              flexShrink: 0,
            }}
          >
            <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: s.dot }} />
            {s.label}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "1.35rem",
              textTransform: "uppercase",
              color: stage.status === "pending" ? "#6b7280" : "#f0ede8",
              margin: 0,
              lineHeight: 1,
              flex: 1,
            }}
          >
            {stage.title}
          </h3>

          {/* Expand chevron */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#6b7280",
              transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              flexShrink: 0,
            }}
          >
            ▶
          </div>
        </div>

        {/* Expandable content */}
        {expanded && (
          <div>
            {/* Command line */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "#4ade80",
                marginBottom: "0.875rem",
                backgroundColor: "#0f1012",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "3px",
                padding: "0.5rem 0.875rem",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#6b7280" }}>$ </span>
              {stage.command}
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9rem",
                color: "#8a8f96",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              {stage.description}
            </p>

            {/* Checklist */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "0.4rem",
                marginBottom: "0.875rem",
              }}
            >
              {stage.checks.map((check, ci) => (
                <div
                  key={ci}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#6b7280",
                  }}
                >
                  <span style={{ color: s.dot, flexShrink: 0 }}>✓</span>
                  {check}
                </div>
              ))}
            </div>

            {/* Helm/k8s tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "rgba(255,130,0,0.06)",
                border: "1px solid rgba(255,130,0,0.15)",
                borderRadius: "3px",
                padding: "0.25rem 0.625rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#ff8200",
              }}
            >
              ⎈ {stage.tag}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
