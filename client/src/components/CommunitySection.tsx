/* ==========================================================================
   COMMUNITY SECTION — CPZ Fitness "Spartan Engineer" design
   Skool community CTA — "Stop debugging alone."
   Dark grid background with orange accents
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

const COMMUNITY_BG = "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776806680/mohamed-fareed-rbSNsoXk-3A-unsplash_t8ba3h.jpg";
// Using the Spartan Race medal photo — shows Philip's full vertical profile
const PHILIP_MEDAL = "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776803158/philip-medal_ippfik.jpg";

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

const features = [
  {
    icon: "⌨️",
    command: ")_",
    title: "Weekly Live Q&A",
    description: "Direct access. Real answers. No gatekeeping. Ask anything — nutrition, training, mindset, gear.",
  },
  {
    icon: "🏋️",
    command: "{ }",
    title: "Workout Library",
    description: "Proven programs for desk-bound bodies. No bro-science, no guesswork — just systems that work.",
  },
  {
    icon: "📊",
    command: "◈",
    title: "Accountability",
    description: "Daily standups — but for your health. A community of engineers who get it and keep each other on track.",
  },
  {
    icon: "📚",
    command: "//",
    title: "Free Courses",
    description: "Geek to Greek Starter Pack, Training OS, and Deployment Blueprint — all free inside the community.",
  },
];

export default function CommunitySection() {
  const { ref, visible } = useVisible();

  return (
    <section
      id="community"
      ref={ref}
      style={{
        position: "relative",
        padding: "7rem 0",
        backgroundColor: "#0f1012",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${COMMUNITY_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(15,16,18,0.8) 0%, rgba(15,16,18,0.6) 50%, rgba(15,16,18,0.9) 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            // community.join()
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              textTransform: "uppercase",
              color: "#f0ede8",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            Stop debugging
            <br />
            <span style={{ color: "#ff8200" }}>alone.</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.05rem",
              color: "#8a8f96",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Join a free community of engineers, developers, and tech professionals who are building better bodies — together. Think of it as your fitness pull-request review group.
          </p>
        </div>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(26, 29, 33, 0.9)",
                border: "1px solid rgba(255, 130, 0, 0.12)",
                borderRadius: "4px",
                padding: "1.75rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "1.25rem",
                  color: "#ff8200",
                  marginBottom: "0.875rem",
                }}
              >
                {f.command}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#f0ede8",
                  marginBottom: "0.5rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.875rem",
                  color: "#8a8f96",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA + photo — side by side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
          className="community-cta-grid"
        >
          {/* Left: CTA text + button */}
          <div style={{ textAlign: "left" }}>
            <a
              href="https://www.skool.com/cpz-fitness-4218/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}
            >
              Join the Community — Free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "#8a8f96",
                marginTop: "0.875rem",
              }}
            >
              No credit card. No bro-science. Just systems that work.
            </p>
          </div>

          {/* Right: Spartan Race finish line photo */}
          <div
            style={{
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid rgba(255, 130, 0, 0.2)",
              position: "relative",
              maxWidth: "480px",
            }}
          >
            <img
              src={PHILIP_MEDAL}
              alt="Philip at Spartan Race finish line"
              style={{
                width: "100%",
                height: "340px",
                objectFit: "cover",
                objectPosition: "right top",
                display: "block",
                filter: "brightness(0.82) contrast(1.08)",
              }}
            />
            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "70px",
                background: "linear-gradient(to top, rgba(15,16,18,0.95), transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0.75rem",
                left: "1rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: "#8a8f96",
              }}
            >
              // spartan race finish line — the result of a debugged system
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
