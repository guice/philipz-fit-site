/* ==========================================================================
   TESTIMONIALS SECTION — CPZ Fitness "Spartan Engineer" design
   Social proof from engineers who've been through the pipeline
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

const testimonials = [
  {
    quote: "I've been in tech for 18 years and I've tried every fitness app, every program. Philip's approach is the first one that actually maps to how my brain works. It's systems thinking applied to the body.",
    name: "Marcus T.",
    role: "Senior Software Engineer",
    stack: "React / Node / AWS",
    result: "+22 lbs lean mass in 6 months",
  },
  {
    quote: "I was the guy who researched everything and did nothing. Philip gave me a clear, executable roadmap. No fluff, no bro-science. Just a system that works around my 60-hour work weeks.",
    name: "David K.",
    role: "DevOps Lead",
    stack: "Kubernetes / Terraform",
    result: "Lost 18 lbs, first pull-up at 38",
  },
  {
    quote: "The gym used to feel like a foreign codebase with no documentation. Now I walk in with a spec. Philip's coaching turned something I dreaded into something I actually look forward to.",
    name: "Raj P.",
    role: "Backend Engineer",
    stack: "Python / Django / GCP",
    result: "Skinny-fat → visible muscle definition",
  },
];

export default function TestimonialsSection() {
  const { ref, visible } = useVisible();

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#0f1012",
        padding: "6rem 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            marginBottom: "3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="section-label">// console.log(results)</div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              textTransform: "uppercase",
              color: "#f0ede8",
              lineHeight: 1,
            }}
          >
            Engineers who
            <br />
            <span style={{ color: "#ff8200" }}>shipped the upgrade.</span>
          </h2>
        </div>

        {/* Note: testimonials are illustrative examples — replace with real client quotes */}
        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1a1d21",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
                padding: "2rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "5rem",
                  color: "rgba(255, 130, 0, 0.1)",
                  lineHeight: 0.8,
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  userSelect: "none",
                }}
              >
                "
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem",
                  color: "#b0aca6",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </p>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "1.25rem" }} />

              {/* Author */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#f0ede8",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.68rem",
                      color: "#8a8f96",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {t.role}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "rgba(255, 130, 0, 0.6)",
                    }}
                  >
                    // {t.stack}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(255, 130, 0, 0.08)",
                    border: "1px solid rgba(255, 130, 0, 0.2)",
                    borderRadius: "2px",
                    padding: "0.375rem 0.625rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#ff8200",
                    whiteSpace: "nowrap",
                  }}
                >
                  ✓ {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
