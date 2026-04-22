/* ==========================================================================
   BOOK SECTION — CPZ Fitness "Spartan Engineer" design
   Free strategy call CTA with YAML spec card + Calendly link
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.15) {
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

const yamlLines = [
  { key: "duration", value: "30 min", color: "#4ade80" },
  { key: "cost", value: "$0", color: "#ff8200" },
  { key: "format", value: "video call", color: "#4ade80" },
  { key: "outcome", value: "personalized roadmap", color: "#4ade80" },
  { key: "commitment", value: "zero", color: "#4ade80" },
  { key: "bro_science", value: "false", color: "#ef4444" },
  { key: "sales_pitch", value: "false", color: "#ef4444" },
];

export default function BookSection() {
  const { ref, visible } = useVisible();

  return (
    <section
      id="book"
      ref={ref}
      style={{
        backgroundColor: "#1a1d21",
        padding: "7rem 0",
        borderTop: "1px solid rgba(255, 130, 0, 0.12)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left: Copy */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="section-label">// init_consultation()</div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                textTransform: "uppercase",
                color: "#f0ede8",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
              Ready to push
              <br />
              <span style={{ color: "#ff8200" }}>your first commit?</span>
            </h2>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                color: "#b0aca6",
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: "480px",
              }}
            >
              Book a free 30-minute strategy call. No sales pitch, no pressure. We'll review your current stack, identify the bottlenecks, and map out a roadmap. If we're a fit, great. If not, you'll still walk away with actionable insights.
            </p>

            {/* YAML spec card */}
            <div className="terminal-card" style={{ marginBottom: "2rem", maxWidth: "380px" }}>
              <div className="terminal-header">
                <div className="terminal-dot" style={{ backgroundColor: "#ff5f56" }} />
                <div className="terminal-dot" style={{ backgroundColor: "#ffbd2e" }} />
                <div className="terminal-dot" style={{ backgroundColor: "#27c93f" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8a8f96", marginLeft: "0.5rem" }}>
                  $ cat consultation.yml
                </span>
              </div>
              <div style={{ padding: "1rem" }}>
                {yamlLines.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.78rem",
                      marginBottom: "0.375rem",
                      display: "flex",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "#8a8f96" }}>{line.key}:</span>
                    <span style={{ color: line.color }}>{line.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href="https://calendly.com/philipz-fit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "1.05rem", padding: "1rem 2.25rem" }}
            >
              Book Your Free Call
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
              </svg>
            </a>

            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "#8a8f96",
                marginTop: "0.875rem",
              }}
            >
              // 30 min · video call · zero commitment
            </p>
          </div>

          {/* Right: Visual card */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            {/* What we'll cover */}
            <div
              style={{
                backgroundColor: "#22262b",
                border: "1px solid rgba(255, 130, 0, 0.15)",
                borderRadius: "4px",
                padding: "2rem",
                marginBottom: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  color: "#f0ede8",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.05em",
                }}
              >
                What we'll cover
              </h3>
              {[
                { step: "01", text: "Audit your current training, nutrition, and sleep habits" },
                { step: "02", text: "Identify the specific bottleneck that's keeping you stuck" },
                { step: "03", text: "Map out a 90-day roadmap tailored to your schedule and goals" },
                { step: "04", text: "Decide together if 1:1 coaching is the right next step" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: i < 3 ? "1rem" : 0,
                    paddingBottom: i < 3 ? "1rem" : 0,
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: "1.25rem",
                      color: "#ff8200",
                      flexShrink: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.step}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      color: "#b0aca6",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Spartan race photo */}
            <div
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <img
                src="https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776803159/philip-finish_cqkte2.jpg"
                alt="Philip at Spartan Race finish line"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  filter: "brightness(0.7) contrast(1.1)",
                }}
              />
              <div
                style={{
                  padding: "0.875rem 1rem",
                  backgroundColor: "#22262b",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#8a8f96",
                }}
              >
                // philip — 134lb broomstick → spartan race finisher
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
