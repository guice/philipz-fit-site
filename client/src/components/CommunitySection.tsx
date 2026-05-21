/* ==========================================================================
   COMMUNITY SECTION — CPZ Fitness "Spartan Engineer" design
   Layout: two-column — content (header + cards + CTA) left, tall vertical photo right
   The medal photo is vertical so it runs full height of the section on the right
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

// Using the Spartan Race medal photo — vertical portrait orientation
const PHILIP_MEDAL = "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776803158/philip-medal_ippfik.jpg";

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

const features = [
  {
    command: "01",
    title: "Weekly Live Q&A",
    description: "Direct access. Real answers. No gatekeeping. Ask anything — nutrition, training, mindset, gear.",
  },
  {
    command: "02",
    title: "Workout Library",
    description: "Proven programs for desk-bound bodies. No bro-science, no guesswork — just systems that work.",
  },
  {
    command: "03",
    title: "Accountability Standups",
    description: "Daily check-ins — but for your health. Engineers who get it and keep each other on track.",
  },
  {
    command: "04",
    title: "3 Free Courses",
    description: "Geek to Greek Starter Pack, Training OS, and Deployment Blueprint — all free inside the community.",
  },
];

export default function CommunitySection() {
  const { ref, visible } = useVisible();
  const windowWidth = useWindowWidth();
  const showPhotoCol = windowWidth >= 700;

  return (
    <section
      id="community"
      ref={ref}
      style={{
        position: "relative",
        backgroundColor: "#0f1012",
        overflow: "hidden",
      }}
    >
      {/* Orange glow — right side */}
      <div
        style={{
          position: "absolute",
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,130,0,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      {/* Two-column grid: content left, photo right — constrained to site max-width */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: showPhotoCol
            ? windowWidth >= 1280
              ? "1fr 520px"
              : windowWidth >= 1024
              ? "1fr 440px"
              : "1fr 340px"
            : "1fr",
          minHeight: "700px",
        }}
      >
        {/* LEFT: All content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="container" style={{ maxWidth: "680px", marginLeft: 0, paddingLeft: "2rem", paddingRight: "2rem", paddingTop: "6rem", paddingBottom: "6rem" }}>

            {/* Section label */}
            <div
              className="section-label"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              // community.join()
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                textTransform: "uppercase",
                color: "#f0ede8",
                lineHeight: 1,
                marginBottom: "1rem",
                marginTop: "0.75rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              Stop spinning
              <br />
              <span style={{ color: "#ff8200" }}>alone.</span>
            </h2>

            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                color: "#8a8f96",
                maxWidth: "520px",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
              }}
            >
              Join a free community of engineers, developers, and tech professionals building better bodies — together. Think of it as your fitness pull-request review group.
            </p>

            {/* Feature list — horizontal rule style */}
            <div
              style={{
                marginBottom: "2.5rem",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.2s",
              }}
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "1.25rem",
                    alignItems: "start",
                    padding: "1.1rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-16px)",
                    transition: `opacity 0.5s ease ${0.25 + i * 0.08}s, transform 0.5s ease ${0.25 + i * 0.08}s`,
                  }}
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      color: "#ff8200",
                      fontWeight: 500,
                      paddingTop: "2px",
                      minWidth: "28px",
                    }}
                  >
                    {f.command}
                  </div>
                  {/* Content */}
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#f0ede8",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {f.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.85rem",
                        color: "#8a8f96",
                        lineHeight: 1.6,
                      }}
                    >
                      {f.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
              }}
            >
              <a
                href="https://lnk.philipz.fit/skool-community"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "1.05rem", padding: "0.9rem 2.25rem", display: "inline-flex" }}
              >
                Join the Community — Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "0.5rem" }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#8a8f96",
                  marginTop: "0.75rem",
                }}
              >
                // no credit card · no bro-science · just systems that work
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT: Tall vertical medal photo — fills grid cell height, padded to match content column */}
        {showPhotoCol && (
        <div
          style={{
            alignSelf: "stretch",
            paddingTop: "6rem",
            paddingBottom: "6rem",
            minHeight: "600px",
          }}
        >
          {/* Inner wrapper fills the padded area and holds the absolutely-positioned photo */}
          <div
            style={{
              position: "relative",
              height: "100%",
              overflow: "hidden",
              borderRadius: "2px",
            }}
          >
            {/* Photo */}
            <img
              src={PHILIP_MEDAL}
              alt="Philip holding his Spartan Race medal"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                filter: "brightness(0.78) contrast(1.1) saturate(0.9)",
              }}
            />

            {/* Left edge fade */}
            <div
              style={{
                position: "absolute",
                top: 0, left: 0, bottom: 0,
                width: "100px",
                background: "linear-gradient(to right, #0f1012, transparent)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            {/* Top edge fade */}
            <div
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "80px",
                background: "linear-gradient(to bottom, #0f1012, transparent)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            {/* Bottom edge fade */}
            <div
              style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "80px",
                background: "linear-gradient(to top, #0f1012, transparent)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />

            {/* Caption */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                color: "rgba(255,255,255,0.3)",
                zIndex: 3,
                textAlign: "right",
              }}
            >
              // spartan race finisher
              <br />
              // the result of an audited system
            </div>

            {/* Orange accent line */}
            <div
              style={{
                position: "absolute",
                top: "20%", bottom: "20%", left: 0,
                width: "2px",
                background: "linear-gradient(to bottom, transparent, #ff8200, transparent)",
                zIndex: 3,
              }}
            />
          </div>
        </div>
        )}
      </div>
      </div>
    </section>
  );
}
