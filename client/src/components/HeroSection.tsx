/* ==========================================================================
   HERO SECTION — CPZ Fitness "Spartan Engineer" design
   Full-viewport hero: gym background, bold headline, dual CTA
   Philip's photo is displayed prominently on the right
   ========================================================================== */

import { useEffect, useState } from "react";

const HERO_BG = "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776806680/mohamed-fareed-rbSNsoXk-3A-unsplash_t8ba3h.jpg";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0f1012",
      }}
    >
      {/* Background gym image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
        backgroundPosition: "60% center",
        opacity: 0.45,
        }}
      />
      {/* Gradient: dark on left, transparent on right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(100deg, rgba(15,16,18,1) 40%, rgba(15,16,18,0.7) 65%, rgba(15,16,18,0.2) 100%)",
        }}
      />
      {/* Bottom diagonal cut */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background: "#0f1012",
          clipPath: "polygon(0 100%, 100% 30%, 100% 100%)",
          zIndex: 2,
        }}
      />
      {/* Orange glow accent */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,130,0,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 3, width: "100%" }}>
        <div
          style={{
            paddingTop: "7rem",
            paddingBottom: "7rem",
            maxWidth: "700px",
          }}
        >
          {/* Label */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              // philipz.fit — geek 2 greek
            </div>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 0.92,
              textTransform: "uppercase",
              color: "#f0ede8",
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            From
            <br />
            <span style={{ color: "#ff8200" }}>Desk-Bound</span>
            <br />
            to
            <br />
            <span
              style={{
                WebkitTextStroke: "2px #f0ede8",
                color: "transparent",
              }}
            >
              Damn-Strong.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "#b0aca6",
              maxWidth: "500px",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}
          >
            I help desk-bound engineers build the physique they keep putting off — using the same systems thinking you already use at work.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            <a href="#book" className="btn-primary" style={{ fontSize: "1rem" }}>
              Book Free Debug Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://lnk.philipz.fit/skool-community"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "1rem" }}
            >
              Join the Community — Free
            </a>
          </div>

          {/* Social proof micro-bar */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.7s ease 0.55s",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "rgba(255, 130, 0, 0.08)",
                border: "1px solid rgba(255, 130, 0, 0.2)",
                borderRadius: "2px",
              }}
            >
              <span style={{ color: "#ff8200", fontSize: "0.8rem" }}>◉</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#b0aca6" }}>
                25+ yrs engineering
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "rgba(255, 130, 0, 0.08)",
                border: "1px solid rgba(255, 130, 0, 0.2)",
                borderRadius: "2px",
              }}
            >
              <span style={{ color: "#4ade80", fontSize: "0.8rem" }}>✓</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#b0aca6" }}>
                134 → 175 lb transformation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
