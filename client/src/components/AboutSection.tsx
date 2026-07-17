/* ==========================================================================
   ABOUT SECTION — CPZ Fitness (new ICA rebrand)
   Philip's founder story: portrait, before/after, stat strip, bio,
   Hiding → Building → Confidence → Coming out timeline.
   Copy is tone-sensitive for this ICA — do not paraphrase.
   ========================================================================== */

const GYM_BG =
  "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776806680/mohamed-fareed-rbSNsoXk-3A-unsplash_t8ba3h.jpg";
const PHILIP_PHOTO =
  "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1778523172/philip-portrait_wci9vg.png";
const BEFORE_PHOTO =
  "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776975080/Before_-_2008_-_Edited_ttmgyl.png";
const AFTER_PHOTO =
  "https://res.cloudinary.com/dzjucinkn/image/upload/q_auto/f_auto/v1776975080/After_-_20260330_-_Transparent_-_Edited_h1glkr.png";

const aboutStats = [
  { n: "15+", l: "Years Training" },
  { n: "10", l: "Years Out" },
  { n: "134→175", l: "lb Transformation" },
];

const timelineSteps = [
  {
    n: "1",
    title: "Hiding",
    body: "Years of not fully being who I was — including in how I carried myself.",
    hasLine: true,
  },
  {
    n: "2",
    title: "Building",
    body: "The training started before I had the confidence to come out.",
    hasLine: true,
  },
  {
    n: "3",
    title: "Confidence",
    body: "Getting stronger changed how I saw myself before it changed how I looked.",
    hasLine: true,
  },
  {
    n: "4",
    title: "Coming out",
    body: "That confidence is what made coming out — and taking my shirt off — possible.",
    hasLine: false,
  },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "7rem 0", position: "relative", overflow: "hidden" }}>
      {/* Soft orange glow, left side */}
      <div
        style={{
          position: "absolute",
          left: "-150px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,140,0,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "4rem", alignItems: "start" }}>
          {/* Left column: portrait, before/after, stat strip */}
          <div>
            {/* Portrait with oval vignette over blurred gym backdrop */}
            <div
              style={{
                position: "relative",
                marginBottom: "1.5rem",
                maxWidth: "460px",
                aspectRatio: "3/4",
                WebkitMaskImage: "radial-gradient(ellipse 90% 88% at 50% 50%, black 40%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 90% 88% at 50% 50%, black 40%, transparent 100%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${GYM_BG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.25,
                  filter: "blur(3px) saturate(0.5)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at center, rgba(18,19,22,0.05) 0%, rgba(18,19,22,0.55) 100%)",
                }}
              />
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

            {/* Before / After */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", maxWidth: "460px", marginBottom: "2rem" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: "340px",
                    overflow: "hidden",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,140,0,0.15)",
                    marginBottom: "0.5rem",
                  }}
                >
                  <img
                    src={BEFORE_PHOTO}
                    alt="Before — 134 lbs"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.7rem",
                    color: "#aeb2b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Before: 134 lbs
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: "340px",
                    overflow: "hidden",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,140,0,0.15)",
                    marginBottom: "0.5rem",
                  }}
                >
                  <img
                    src={AFTER_PHOTO}
                    alt="After — 175 lbs"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.7rem",
                    color: "#ff8c00",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                  }}
                >
                  After: 175 lbs
                </div>
              </div>
            </div>

            {/* Stat strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(255,140,0,0.1)",
                border: "1px solid rgba(255,140,0,0.1)",
                borderRadius: "4px",
                overflow: "hidden",
                maxWidth: "460px",
              }}
            >
              {aboutStats.map((s) => (
                <div key={s.l} style={{ background: "#1e2023", padding: "1.25rem 1rem", textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Schibsted Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: "#ff8c00",
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.6rem",
                      color: "#aeb2b8",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginTop: "0.375rem",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: story */}
          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ff8c00",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "16px", letterSpacing: "1.872px" }}>🌈&nbsp;</span>About Me
            </div>
            <h2
              style={{
                fontFamily: "'Schibsted Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                color: "#eceef0",
                lineHeight: 1.08,
                margin: "0 0 1.5rem",
              }}
            >
              The training came first. <span style={{ color: "#ff8c00" }}>Coming out came after.</span>
            </h2>

            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#aeb2b8", lineHeight: 1.75, marginBottom: "2rem" }}>
              <p style={{ margin: "0 0 1rem" }}>
                I started training years before I came out. Not from some grand plan — I just knew I didn't feel like myself,
                and lifting was the one thing I could actually control.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                The stronger I got, the more the rest of it started moving. Confidence I hadn't set out to build. By the time I
                came out — by the time I could take my shirt off without running a calculation first — it wasn't a leap. It was
                just the next honest thing, after a lot of smaller ones.
              </p>
              <p style={{ margin: "0 0 1rem" }}>
                I don't think it has to happen in that order. For plenty of guys it's the reverse — the identity work comes
                first, and the body is what's still catching up. What I know for sure is the two feed each other. You don't
                need one finished before you start the other.
              </p>
              <p style={{ margin: 0 }}>
                Now I coach gay men through that same arc, whichever direction it runs for them. Not chasing a six-pack —
                building the confidence that makes the rest of it possible.
              </p>
            </div>

            {/* Timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {timelineSteps.map((step) => (
                <div key={step.n} style={{ display: "flex", gap: "1.25rem", paddingBottom: "1.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "rgba(255,140,0,0.1)",
                        border: "2px solid rgba(255,140,0,0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Schibsted Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: "#ff8c00",
                        flexShrink: 0,
                      }}
                    >
                      {step.n}
                    </div>
                    {step.hasLine && (
                      <div style={{ flex: 1, width: "2px", background: "rgba(255,140,0,0.2)", minHeight: "1.25rem" }} />
                    )}
                  </div>
                  <div style={{ paddingTop: "0.35rem" }}>
                    <div
                      style={{
                        fontFamily: "'Schibsted Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "#eceef0",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {step.title}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#aeb2b8", lineHeight: 1.55 }}>
                      {step.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
