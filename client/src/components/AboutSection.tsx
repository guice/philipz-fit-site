/* ==========================================================================
   ABOUT SECTION — CPZ Fitness "Spartan Engineer" design
   Philip's story, git log timeline, credibility stats
   Uses Philip's actual photo from the draft site
   ========================================================================== */

import { useEffect, useRef, useState } from "react";
import { PrideFlag } from "./PrideFlag";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663284143252/3AM5HcyaoCtGK7Q72bwxDY/cpz-about-texture-9cXjDdyAxrXjZ2xLPyS6nd.webp";

// Philip's actual portrait photo from Cloudinary
const PHILIP_PHOTO = "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776802756/philip-portrait_wci9vg.png";

// Faded gym background for depth behind portrait
const GYM_BG = "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776806680/mohamed-fareed-rbSNsoXk-3A-unsplash_t8ba3h.jpg";

// Before/After transformation photos (torso-only shots, cropped to matching height)
const BEFORE_PHOTO = "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776975080/Before_-_2008_-_Edited_ttmgyl.png";
const AFTER_PHOTO = "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776975080/After_-_20260330_-_Transparent_-_Edited_h1glkr.png";

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

const gitLog = [
  { hash: "a1b2c3d", message: "Initial commit — 134lb, couldn't do a pull-up", tag: "v0.1", tagColor: "#8a8f96", tagBg: "rgba(255,255,255,0.08)" },
  { hash: "b2c3d4e", message: "Rejected by Air Force — body flagged as too fragile to serve", tag: null, tagColor: "", tagBg: "" },
  { hash: "c3d4e5f", message: "Started software engineering — body still running v0.1", tag: "v0.5", tagColor: "#8a8f96", tagBg: "rgba(255,255,255,0.08)" },
  { hash: "d4e5f6g", message: "Lived online — no real-world XP, just isolation", tag: null, tagColor: "", tagBg: "" },
  { hash: "e5f6g7h", message: "Found a trainer — first time someone handed me a spec", tag: "v1.0", tagColor: "#ef4444", tagBg: "rgba(239,68,68,0.12)" },
  { hash: "f6g7h8i", message: "Ventured solo — learned progressive overload the hard way", tag: "v1.5", tagColor: "#8a8f96", tagBg: "rgba(255,255,255,0.08)" },
  { hash: "g7h8i9j", message: "10 years of trial, error, and relentless debugging", tag: null, tagColor: "", tagBg: "" },
  { hash: "h8i9j0k", message: "Crossed the finish line — Spartan & Tough Mudder finisher", tag: "v2.0", tagColor: "#8a8f96", tagBg: "rgba(255,255,255,0.08)" },
  { hash: "i9j0k1l", message: "Launched Geek 2 Greek — helping engineers level up", tag: "latest", tagColor: "#0f1012", tagBg: "#ff8200" },
];

export default function AboutSection() {
  const { ref, visible } = useVisible();


  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: "relative",
        padding: "7rem 0",
        backgroundColor: "#0f1012",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gap: "4rem",
            alignItems: "start",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left: Photo + stats */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Photo wrapper — CSS mask for true smooth edge blending */}
            <div
              style={{
                position: "relative",
                marginBottom: "1.5rem",
                maxWidth: "460px",
                aspectRatio: "3/4",
                /* mask-image creates a true alpha fade — no hard edges */
                WebkitMaskImage: "radial-gradient(ellipse 90% 88% at 50% 50%, black 40%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 90% 88% at 50% 50%, black 40%, transparent 100%)",
              }}
            >
              {/* Gym background layer */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${GYM_BG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.28,
                  filter: "blur(3px) saturate(0.5)",
                }}
              />
              {/* Dark vignette over gym bg */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at center, rgba(15,16,18,0.05) 0%, rgba(15,16,18,0.5) 100%)",
                }}
              />
              {/* Philip's portrait */}
              <img
                src={PHILIP_PHOTO}
                alt="Philip — CPZ Fitness Coach"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>

            {/* Before/After transformation comparison */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                maxWidth: "460px",
                marginBottom: "2rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                {/* Fixed-height container ensures both photos render at identical height regardless of natural dimensions */}
                <div
                  style={{
                    height: "420px",
                    overflow: "hidden",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    marginBottom: "0.5rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = 'scale(1)'; }}
                >
                  <img
                    src={BEFORE_PHOTO}
                    alt="Before — 134 lbs"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#8a8f96", textTransform: "uppercase" }}>
                  Before: 134 lbs
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                {/* Fixed-height container ensures both photos render at identical height regardless of natural dimensions */}
                <div
                  style={{
                    height: "420px",
                    overflow: "hidden",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    marginBottom: "0.5rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = 'scale(1)'; }}
                >
                  <img
                    src={AFTER_PHOTO}
                    alt="After — 175 lbs"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#ff8200", textTransform: "uppercase", fontWeight: 600 }}>
                  After: 175 lbs
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
                overflow: "hidden",
                maxWidth: "460px",
              }}
            >
              {[
                { n: "25+", l: "Years in Tech" },
                { n: "15+", l: "Years Training" },
                { n: "134→175", l: "lb Transformation" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#1a1d21",
                    padding: "1.25rem 1rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: i === 2 ? "1.4rem" : "1.75rem",
                      color: "#ff8200",
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#8a8f96",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginTop: "0.375rem",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Story + git log */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div className="section-label" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              //<PrideFlag size="sm" /> about.me
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                textTransform: "uppercase",
                color: "#f0ede8",
                lineHeight: 0.95,
                marginBottom: "1.5rem",
              }}
            >
              I was the guy
              <br />
              <span style={{ color: "#ff8200" }}>hiding behind</span>
              <br />
              the avatar.
            </h2>

            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                color: "#b0aca6",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              <p style={{ marginBottom: "1rem" }}>
                I started at 134 pounds. The Air Force rejected me for being too frail. I was the walking broomstick in an oversized shirt. I know what it feels like to be the weakest person in every room.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                I became a software engineer and got good at it. But outside of work, I retreated online. No social circle. No real-world XP. Just isolation — and a body that hadn't changed since high school.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                A trainer handed me my first real spec. I followed it, saw results, then ventured solo — ten years of trial, error, and relentless debugging until I finally understood how the system worked. I completed Spartan and Tough Mudder races I couldn't have finished before, and ultimately built the body I was told I couldn't have.
              </p>
              <p>
                Now I help my fellow engineers stuck in the same loop. You don't need another generic plan. You need someone who speaks your language, understands your constraints, and has already debugged the exact system you're trying to fix.
              </p>
            </div>

            {/* Git log terminal */}
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ backgroundColor: "#ff5f56" }} />
                <div className="terminal-dot" style={{ backgroundColor: "#ffbd2e" }} />
                <div className="terminal-dot" style={{ backgroundColor: "#27c93f" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8a8f96", marginLeft: "0.5rem" }}>
                  $ git log --oneline --graph
                </span>
              </div>
              <div style={{ padding: "1rem 1.25rem" }}>
                {gitLog.map((entry, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.5rem",
                      marginBottom: i < gitLog.length - 1 ? "0.5rem" : 0,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.72rem",
                    }}
                  >
                    <span style={{ color: "#6b7280", flexShrink: 0 }}>*</span>
                    <span style={{ color: "#4ade80", flexShrink: 0 }}>{entry.hash}</span>
                    <span style={{ color: "#8a8f96", flex: 1, minWidth: 0 }}>{entry.message}</span>
                    {entry.tag && (
                      <span
                        style={{
                          backgroundColor: entry.tagBg,
                          color: entry.tagColor,
                          padding: "0.1rem 0.4rem",
                          borderRadius: "2px",
                          fontSize: "0.62rem",
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        {entry.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
