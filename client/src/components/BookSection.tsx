/* ==========================================================================
   BOOK SECTION — CPZ Fitness "Spartan Engineer" design
   Free strategy call — 2-col: placeholder form | YAML spec + what we'll cover
   Photo removed per feedback — section was too crowded with 3 cols.
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

const yamlLines = [
  { key: "duration",    value: "30 min",              color: "#4ade80" },
  { key: "cost",        value: "$0",                  color: "#ff8200" },
  { key: "format",      value: "video call",           color: "#4ade80" },
  { key: "outcome",     value: "personalized roadmap", color: "#4ade80" },
  { key: "commitment",  value: "zero",                 color: "#4ade80" },
  { key: "bro_science", value: "false",                color: "#ef4444" },
  { key: "sales_pitch", value: "false",                color: "#ef4444" },
];

export default function BookSection() {
  const { ref, visible } = useVisible();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — wire up to your preferred form backend (Formspree, ConvertKit, etc.)
    setSubmitted(true);
  }

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
        {/* Section header */}
        <div
          style={{
            marginBottom: "3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
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
              marginBottom: "0.75rem",
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
              maxWidth: "560px",
            }}
          >
            Book a free 30-minute strategy call. No sales pitch, no pressure. We'll review your current stack, identify the bottlenecks, and map out a roadmap. If we're a fit, great. If not, you'll still walk away with actionable insights.
          </p>
        </div>

        {/* Two-column layout: form | spec + what we'll cover */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            alignItems: "start",
          }}
          className="book-grid-2col"
        >
          {/* ── Col 1: Booking form ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div
              style={{
                backgroundColor: "#22262b",
                border: "1px solid rgba(255, 130, 0, 0.15)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {/* Terminal header */}
              <div className="terminal-header">
                <div className="terminal-dot" style={{ backgroundColor: "#ff5f56" }} />
                <div className="terminal-dot" style={{ backgroundColor: "#ffbd2e" }} />
                <div className="terminal-dot" style={{ backgroundColor: "#27c93f" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8a8f96", marginLeft: "0.5rem" }}>
                  $ consultation --init
                </span>
              </div>

              {submitted ? (
                /* Success state */
                <div style={{ padding: "3rem 2rem", textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      color: "#4ade80",
                      marginBottom: "1rem",
                    }}
                  >
                    ✓ deployment successful
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      textTransform: "uppercase",
                      color: "#f0ede8",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Request received.
                  </div>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.875rem",
                      color: "#8a8f96",
                      lineHeight: 1.6,
                    }}
                  >
                    I'll be in touch within 24 hours to schedule your free call.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ padding: "1.75rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}
                >
                  {/* Name */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.68rem",
                        color: "#8a8f96",
                        marginBottom: "0.375rem",
                      }}
                    >
                      name: <span style={{ color: "#ff8200" }}>string</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        backgroundColor: "#0f1012",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "3px",
                        padding: "0.7rem 0.875rem",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.9rem",
                        color: "#f0ede8",
                        outline: "none",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,130,0,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.68rem",
                        color: "#8a8f96",
                        marginBottom: "0.375rem",
                      }}
                    >
                      email: <span style={{ color: "#ff8200" }}>string</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.dev"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        backgroundColor: "#0f1012",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "3px",
                        padding: "0.7rem 0.875rem",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.9rem",
                        color: "#f0ede8",
                        outline: "none",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,130,0,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.68rem",
                        color: "#8a8f96",
                        marginBottom: "0.375rem",
                      }}
                    >
                      message: <span style={{ color: "#8a8f96" }}>string | null</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="What's your biggest bottleneck right now? (optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        backgroundColor: "#0f1012",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "3px",
                        padding: "0.7rem 0.875rem",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.9rem",
                        color: "#f0ede8",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,130,0,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", marginTop: "0.25rem", fontSize: "0.95rem" }}
                  >
                    Deploy Consultation Request →
                  </button>

                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#6b7280",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    // 30 min · video call · zero commitment
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── Col 2: YAML spec + what we'll cover ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            {/* YAML spec card */}
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ backgroundColor: "#ff5f56" }} />
                <div className="terminal-dot" style={{ backgroundColor: "#ffbd2e" }} />
                <div className="terminal-dot" style={{ backgroundColor: "#27c93f" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8a8f96", marginLeft: "0.5rem" }}>
                  $ cat consultation.yml
                </span>
              </div>
              <div style={{ padding: "1.1rem 1.25rem" }}>
                {yamlLines.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.82rem",
                      marginBottom: "0.45rem",
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

            {/* What we'll cover */}
            <div
              style={{
                backgroundColor: "#22262b",
                border: "1px solid rgba(255, 130, 0, 0.12)",
                borderRadius: "4px",
                padding: "1.75rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.15rem",
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
                      fontSize: "1.2rem",
                      color: "#ff8200",
                      flexShrink: 0,
                      lineHeight: 1.3,
                      minWidth: "2rem",
                    }}
                  >
                    {item.step}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      color: "#b0aca6",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
