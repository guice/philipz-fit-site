/* ==========================================================================
   PIPELINE SECTION — CPZ Fitness "Spartan Engineer" design
   5-stage transformation pipeline as visual card grid
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.1) {
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

const PIPELINE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663284143252/3AM5HcyaoCtGK7Q72bwxDY/cpz-pipeline-bg-W5afeA2L4SwawudNyzTqQQ.webp";

const stages = [
  {
    number: "01",
    command: "$ git clone",
    title: "Assessment",
    description: "We audit your current codebase: body composition, movement patterns, nutrition habits, sleep, stress. No judgment — just data. Think of it as your initial code review.",
    checks: ["Body composition analysis", "Movement screening", "Nutrition & habit audit", "Goal architecture"],
  },
  {
    number: "02",
    command: "$ npm run build",
    title: "Custom Programming",
    description: "Your training and nutrition plan, written specifically for your schedule, your equipment, and your level. No copy-paste templates. This is bespoke software for your body.",
    checks: ["Personalized training splits", "Macro-calibrated nutrition", "Progressive overload mapping", "Schedule-aware programming"],
  },
  {
    number: "03",
    command: "$ npm test",
    title: "Execute & Iterate",
    description: "Weekly check-ins are our CI pipeline. We review metrics, adjust variables, and catch regressions before they compound. Every session generates data. Every data point drives the next commit.",
    checks: ["Weekly video check-ins", "Form review & correction", "Biometric tracking", "Program adjustments"],
  },
  {
    number: "04",
    command: "$ deploy --prod",
    title: "Habits Go Live",
    description: "This is where it clicks. Training becomes automatic. Meal prep is just another cron job. You stop thinking about it and start living it. Your new defaults are deployed.",
    checks: ["Habit automation systems", "Environmental design", "Accountability frameworks", "Stress management protocols"],
  },
  {
    number: "05",
    command: "$ monitor --uptime",
    title: "Maintain & Scale",
    description: "Long-term monitoring. We prevent drift, handle edge cases (travel, holidays, life), and scale your capacity over time. This isn't a 12-week program — it's a permanent upgrade.",
    checks: ["Long-term optimization", "Life event handling", "Performance scaling", "Independence building"],
  },
];

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
      {/* Subtle bg texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${PIPELINE_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.03,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            marginBottom: "3.5rem",
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

        {/* Pipeline cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {stages.map((stage, i) => (
            <PipelineCard key={i} stage={stage} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
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

function PipelineCard({ stage, index, visible }: { stage: typeof stages[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#22262b",
        border: `1px solid ${hovered ? "rgba(255, 130, 0, 0.3)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "4px",
        padding: "1.75rem",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, border-color 0.2s ease`,
        cursor: "default",
      }}
    >
      {/* Left orange bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: hovered ? "100%" : "0%",
          backgroundColor: "#ff8200",
          transition: "height 0.3s ease",
        }}
      />

      {/* Stage number */}
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "3.5rem",
          color: "rgba(255, 130, 0, 0.08)",
          lineHeight: 1,
          position: "absolute",
          top: "1rem",
          right: "1.25rem",
          userSelect: "none",
        }}
      >
        {stage.number}
      </div>

      {/* Command label */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          color: "#4ade80",
          marginBottom: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ color: "#8a8f96" }}>stage {stage.number}/05</span>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
        {stage.command}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "1.5rem",
          textTransform: "uppercase",
          color: "#f0ede8",
          marginBottom: "0.875rem",
          lineHeight: 1.1,
        }}
      >
        {stage.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.875rem",
          color: "#8a8f96",
          lineHeight: 1.65,
          marginBottom: "1.25rem",
        }}
      >
        {stage.description}
      </p>

      {/* Checklist */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
        {stage.checks.map((check, ci) => (
          <div
            key={ci}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              color: "#6b7280",
            }}
          >
            <span style={{ color: "#ff8200", flexShrink: 0 }}>✓</span>
            {check}
          </div>
        ))}
      </div>
    </div>
  );
}
