/* ==========================================================================
   BOOK SECTION — CPZ Fitness "Spartan Engineer" design
   GHL form widget (dynamic height via postMessage) | YAML spec + agenda
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

// Inject GHL form_embed.js once — it handles iframe auto-resize via postMessage
function useGHLScript() {
  useEffect(() => {
    if (document.getElementById("ghl-form-embed-script")) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.id = "ghl-form-embed-script";
    document.body.appendChild(script);
  }, []);
}

// Dynamic iframe height — listens for GHL postMessage resize events
function useIframeHeight(iframeId: string, defaultHeight = 700) {
  const [height, setHeight] = useState(defaultHeight);
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.data || typeof e.data !== "object") return;
      // GHL emits { type: "SET_HEIGHT", value: <px> } or { iframeId, height }
      if (e.data.iframeId === iframeId && typeof e.data.height === "number") {
        setHeight(Math.max(e.data.height, defaultHeight));
      }
      if (e.data.type === "SET_HEIGHT" && typeof e.data.value === "number") {
        setHeight(Math.max(e.data.value, defaultHeight));
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [iframeId, defaultHeight]);
  return height;
}

const GHL_IFRAME_ID = "Hiu3h6YoF9aNPhtcAgfR";

const yamlLines = [
  { key: "response_time",  value: "< 24 hours",          color: "#4ade80" },
  { key: "cost",           value: "$0",                   color: "#ff8200" },
  { key: "format",         value: "video call",            color: "#4ade80" },
  { key: "outcome",        value: "personalized roadmap",  color: "#4ade80" },
  { key: "commitment",     value: "zero",                  color: "#4ade80" },
  { key: "bro_science",    value: "false",                 color: "#ef4444" },
  { key: "sales_pitch",    value: "false",                 color: "#ef4444" },
];

export default function BookSection() {
  const { ref, visible } = useVisible();
  useGHLScript();
  const iframeHeight = useIframeHeight(GHL_IFRAME_ID, 700);

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
            Help me debug.
            <br />
            <span style={{ color: "#ff8200" }}>Let's fix it.</span>
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
            Tell me what's broken. No sales pitch, no pressure. We'll review your current stack, identify the bottlenecks, and map out a roadmap. If we're a fit, great. If not, you'll still walk away with actionable insights.
          </p>
        </div>

        {/* Two-column layout: GHL form iframe | YAML spec + agenda */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            alignItems: "start",
          }}
          className="book-grid-2col"
        >
          {/* ── Col 1: GHL Form Widget ── */}
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
                  $ debug --init
                </span>
              </div>

              {/* GHL Form Widget — height grows dynamically via postMessage */}
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/Hiu3h6YoF9aNPhtcAgfR"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  display: "block",
                  height: `${iframeHeight}px`,
                  transition: "height 0.3s ease",
                }}
                scrolling="no"
                id={GHL_IFRAME_ID}
              />
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
