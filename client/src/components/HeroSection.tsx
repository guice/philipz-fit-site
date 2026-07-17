/* ==========================================================================
   HERO SECTION — CPZ Fitness (new ICA rebrand)
   Full-viewport hero: gym background, League Spartan display headline with
   optional rainbow-gradient highlight word, staggered entrance animation.
   ========================================================================== */

import { useEffect, useState } from "react";

const HERO_BG =
  "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776806680/mohamed-fareed-rbSNsoXk-3A-unsplash_t8ba3h.jpg";

type HeroVariant = "reclaim" | "mirror" | "seen";

// Shipped default is "reclaim"; "seen" is the variant with the rainbow-highlighted word.
const HERO_VARIANT: HeroVariant = "reclaim";

const HERO_COPY: Record<
  HeroVariant,
  { line1: string; line2Pre: string; line2Highlight: string; line2Post: string; sub: string }
> = {
  reclaim: {
    line1: "You already did the hardest identity work there is.",
    line2Pre: "This part's still unfinished.",
    line2Highlight: "",
    line2Post: "",
    sub: "I help gay men build muscle, lose fat, and stop hiding in a body that doesn't match who they already are. No comparison, no shame spiral — the same honest work that got you out of the closet, now pointed at the mirror.",
  },
  mirror: {
    line1: "Strong enough",
    line2Pre: "to stop flinching in the mirror.",
    line2Highlight: "",
    line2Post: "",
    sub: "You claimed your identity years ago. I coach gay men through building the muscle, losing the fat, and dropping the habit of hiding that outlived the closet.",
  },
  seen: {
    line1: "Lifting",
    line2Pre: "to be ",
    line2Highlight: "seen",
    line2Post: ".",
    sub: "I help gay men reclaim themselves — losing fat, building muscle, and revealing the body that commands the room. Not another aesthetic chase. The same honest work that got you out of hiding once.",
  },
};

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const copy = HERO_COPY[HERO_VARIANT];

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Background gym image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "60% center",
          opacity: 0.4,
        }}
      />
      {/* Left-to-right dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(18,19,22,1) 40%, rgba(18,19,22,0.75) 65%, rgba(18,19,22,0.25) 100%)",
        }}
      />
      {/* Soft orange radial glow, top-center */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(255,140,0,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
        <div style={{ padding: "8rem 0", maxWidth: "680px" }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#ff8c00",
              marginBottom: "1.5rem",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            Coaching for gay men — philipz.fit
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'League Spartan', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(4rem, 5.5vw, 6rem)",
              color: "#eceef0",
              margin: "0 0 1.75rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              textTransform: "uppercase",
              lineHeight: 0.9,
            }}
          >
            {copy.line1}
            <br />
            <span style={{ color: "#ff8c00" }}>{copy.line2Pre}</span>
            {copy.line2Highlight && (
              <span
                className="rainbow-text"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(5rem, 7vw, 7.25rem)",
                  display: "inline-block",
                  position: "relative",
                  top: "-0.16em",
                  lineHeight: 0.5,
                }}
              >
                {copy.line2Highlight}
              </span>
            )}
            {copy.line2Post && <span style={{ color: "#ff8c00" }}>{copy.line2Post}</span>}
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "#aeb2b8",
              maxWidth: "520px",
              lineHeight: 1.7,
              margin: "0 0 2.5rem",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.7s ease 0.25s",
            }}
          >
            {copy.sub}
          </p>

          {/* Primary CTA */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.4s" }}>
            <a
              href="#book"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#ff8c00",
                color: "#121316",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "0.9rem 2rem",
                borderRadius: "14px",
                textDecoration: "none",
              }}
            >
              Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Social proof pills */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
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
                background: "rgba(255,140,0,0.08)",
                border: "1px solid rgba(255,140,0,0.2)",
                borderRadius: "14px",
              }}
            >
              <span style={{ color: "#ff8c00", fontSize: "0.8rem" }}>●</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.72rem", color: "#aeb2b8" }}>
                15+ years coaching &amp; training
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                background: "rgba(255,140,0,0.08)",
                border: "1px solid rgba(255,140,0,0.2)",
                borderRadius: "14px",
              }}
            >
              {/* Green checkmark is a deliberate one-off exception to the single-accent rule */}
              <span style={{ color: "rgb(74, 222, 128)", fontSize: "0.8rem" }}>✓</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.72rem", color: "#aeb2b8" }}>
                134 → 175 lb — his own transformation
              </span>
            </div>
          </div>

          {/* Instagram callout */}
          <div
            style={{
              marginTop: "2rem",
              padding: "1.1rem 1.4rem",
              background: "rgba(255,140,0,0.03)",
              border: "1px solid rgba(255,140,0,0.1)",
              borderRadius: "4px",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.7s ease 0.65s",
              maxWidth: "480px",
            }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", color: "#aeb2b8", margin: 0, lineHeight: 1.5 }}>
              Follow{" "}
              <a
                href="https://instagram.com/philipz.fit"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ff8c00",
                  textDecoration: "none",
                  fontWeight: 500,
                  borderBottom: "1px solid rgba(255,140,0,0.3)",
                }}
              >
                @philipz.fit
              </a>{" "}
              on Instagram for training and the stuff nobody else in this space says out loud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
