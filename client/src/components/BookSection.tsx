/* ==========================================================================
   BOOK SECTION — CPZ Fitness "Spartan Engineer" design
   Contact form: name, email, optional phone, debug issue field
   Right col: YAML spec + what we'll cover agenda
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
  { key: "response_time",  value: "< 24 hours",          color: "#4ade80" },
  { key: "cost",           value: "$0",                   color: "#ff8200" },
  { key: "format",         value: "video call",            color: "#4ade80" },
  { key: "outcome",        value: "personalized roadmap",  color: "#4ade80" },
  { key: "commitment",     value: "zero",                  color: "#4ade80" },
  { key: "bro_science",    value: "false",                 color: "#ef4444" },
  { key: "sales_pitch",    value: "false",                 color: "#ef4444" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#0f1012",
  border: "1px solid rgba(255, 130, 0, 0.2)",
  borderRadius: "2px",
  padding: "0.75rem 1rem",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.9rem",
  color: "#f0ede8",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.72rem",
  color: "#8a8f96",
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  display: "block",
  marginBottom: "0.4rem",
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function BookSection() {
  const { ref, visible } = useVisible();
  const [formState, setFormState] = useState<FormState>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    // Simulate submission — wire to GHL webhook or email service when ready
    await new Promise(res => setTimeout(res, 1200));
    setFormState("success");
  }

  const getFocusBorder = (field: string) =>
    focusedField === field ? "1px solid rgba(255, 130, 0, 0.7)" : inputStyle.border as string;

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
            Tell me what's broken.
            <br />
            <span style={{ color: "#ff8200" }}>I'll reach back out.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              color: "#b0aca6",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}
          >
            Drop your details and describe the bug. No pitch, no pressure — just a real conversation about what's holding you back and how to fix it. I'll follow up within 24 hours.
          </p>
        </div>

        {/* Two-column layout: contact form | YAML spec + agenda */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            alignItems: "start",
          }}
          className="book-grid-2col"
        >
          {/* ── Col 1: Contact Form ── */}
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
                  $ submit --debug-report
                </span>
              </div>

              <div style={{ padding: "1.75rem" }}>
                {formState === "success" ? (
                  /* ── Success state ── */
                  <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        color: "#4ade80",
                        marginBottom: "1rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      ✓ commit logged
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: "1.75rem",
                        textTransform: "uppercase",
                        color: "#f0ede8",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Commit logged.
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.9rem",
                        color: "#b0aca6",
                        lineHeight: 1.7,
                        maxWidth: "340px",
                        margin: "0 auto",
                      }}
                    >
                      This is v0.1 of the new build. I'll be in touch within 24 hours. Come ready to talk honestly about what's broken — that's where the fix starts.
                    </p>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {/* Name */}
                    <div>
                      <label htmlFor="name" style={labelStyle}>name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={fields.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle, border: getFocusBorder("name") }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" style={labelStyle}>email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={fields.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle, border: getFocusBorder("email") }}
                      />
                    </div>

                    {/* Phone — optional */}
                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        phone <span style={{ color: "#555b63" }}>(optional — for SMS follow-up)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={fields.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle, border: getFocusBorder("phone") }}
                      />
                    </div>

                    {/* Debug issue */}
                    <div>
                      <label htmlFor="issue" style={labelStyle}>
                        describe the bug. what's broken and how long has it been broken? *
                      </label>
                      <textarea
                        id="issue"
                        name="issue"
                        required
                        rows={5}
                        placeholder="Be specific. The more honest you are here, the more useful our conversation will be."
                        value={fields.issue}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("issue")}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...inputStyle,
                          border: getFocusBorder("issue"),
                          resize: "vertical",
                          minHeight: "120px",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="btn-primary"
                      style={{
                        justifyContent: "center",
                        opacity: formState === "submitting" ? 0.7 : 1,
                        cursor: formState === "submitting" ? "not-allowed" : "pointer",
                      }}
                    >
                      {formState === "submitting" ? (
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem" }}>
                          pushing commit...
                        </span>
                      ) : (
                        "Submit Debug Report →"
                      )}
                    </button>

                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#555b63", textAlign: "center", margin: 0 }}>
                      I'll follow up within 24 hours. No pitch. No pressure.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ── Col 2: YAML spec + agenda ── */}
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
