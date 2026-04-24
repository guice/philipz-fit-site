/* ==========================================================================
   FOR SECTION — CPZ Fitness "Spartan Engineer" design
   ICP targeting: "This is for you if..." — speaks directly to the pain points
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.2) {
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

const painPoints = [
  {
    icon: "💻",
    title: "You're the smartest guy in the room",
    body: "You've optimized your IDE, your home network, your coffee setup. Your body is the one system you haven't debugged yet.",
  },
  {
    icon: "🔁",
    title: "You keep respawning at the same checkpoint",
    body: "You've started three times. Maybe six. You know the theory. The execution loop is broken somewhere and you can't find the bug.",
  },
  {
    icon: "🏋️",
    title: "The gym feels like a foreign codebase",
    body: "Everyone else seems to know the syntax. You walk in with no spec, no tests, and no idea what you're supposed to be building.",
  },
  {
    icon: "📊",
    title: "You over-research, under-execute",
    body: "You've read 42 Reddit threads on optimal training splits. You still haven't committed a single rep. Analysis paralysis is a real bug.",
  },
  {
    icon: "🪞",
    title: "You feel skinny-fat and don't know why",
    body: "Not obese. Not fit. Soft in the middle, no muscle definition, and somehow both under-eating and over-eating at the same time.",
  },
  {
    icon: "🎯",
    title: "You want to feel confident, not just healthy",
    body: "The real goal isn't abs. It's walking into a room and feeling like the person you know you're capable of being.",
  },
];

export default function ForSection() {
  const { ref, visible } = useVisible();

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#0f1012",
        padding: "6rem 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            marginBottom: "3.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="section-label">// who.this.is.for()</div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              textTransform: "uppercase",
              color: "#f0ede8",
              lineHeight: 1,
              maxWidth: "600px",
            }}
          >
            Sound familiar?
            <br />
            <span style={{ color: "#ff8200" }}>You're in the right place.</span>
          </h2>
        </div>

        {/* Pain point grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {painPoints.map((point, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1a1d21",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
                padding: "1.75rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.875rem" }}>{point.icon}</div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#f0ede8",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  color: "#8a8f96",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: "#1a1d21",
            border: "1px solid rgba(255, 130, 0, 0.2)",
            borderRadius: "4px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.4rem",
                textTransform: "uppercase",
                color: "#f0ede8",
                margin: 0,
              }}
            >
              If you checked 3 or more of those boxes —
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.95rem",
                color: "#8a8f96",
                margin: "0.375rem 0 0",
              }}
            >
              you don't have a motivation problem. You have a systems problem. That's fixable.
            </p>
          </div>
          <a href="#book" className="btn-primary">
            Let's Debug It →
          </a>
        </div>
      </div>
    </section>
  );
}
