/* ==========================================================================
   FOR SECTION — CPZ Fitness (new ICA rebrand)
   "Sound familiar?" — six pain-point cards + CTA banner
   ========================================================================== */

const painPoints = [
  {
    number: "01",
    title: "You did the hard part already",
    body: "Coming out took real courage. Somehow the body still feels like unfinished business.",
  },
  {
    number: "02",
    title: "You dread shirtless season",
    body: "Pools, beaches, bedrooms — you've gotten good at staying covered.",
  },
  {
    number: "03",
    title: "The apps make it worse",
    body: "Comparing yourself to a feed built for comparison isn't something you scroll your way out of.",
  },
  {
    number: "04",
    title: "You start strong, then stop",
    body: "Three weeks in, motivation drops and so do you. That's not a willpower problem.",
  },
  {
    number: "05",
    title: "The gym feels like someone else's space",
    body: "Nobody handed you the unwritten rules, so you avoid the free weights — or the gym entirely.",
  },
  {
    number: "06",
    title: "You want confidence, not just abs",
    body: "The real goal was never a six-pack. Ever. It was walking into a room without running a script in your head.",
  },
];

export default function ForSection() {
  return (
    <section id="for" style={{ padding: "7rem 0", position: "relative", overflow: "hidden" }}>
      {/* Soft orange glow, right side */}
      <div
        style={{
          position: "absolute",
          right: "-150px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "3.5rem" }}>
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
            Sound familiar?
          </div>
          <h2
            style={{
              fontFamily: "'Schibsted Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              color: "#eceef0",
              lineHeight: 1.05,
              margin: 0,
              maxWidth: "640px",
            }}
          >
            You're not
            <br />
            <span style={{ color: "#ff8c00" }}>the only one.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {painPoints.map((point) => (
            <div
              key={point.number}
              style={{
                background: "#1e2023",
                border: "1px solid rgba(255,140,0,0.12)",
                borderRadius: "4px",
                padding: "1.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#ff8c00",
                  marginBottom: "0.875rem",
                }}
              >
                {point.number}
              </div>
              <h3
                style={{
                  fontFamily: "'Schibsted Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#eceef0",
                  margin: "0 0 0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {point.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", color: "#aeb2b8", lineHeight: 1.65, margin: 0 }}>
                {point.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "#1e2023",
            border: "1px solid rgba(255,140,0,0.2)",
            borderRadius: "4px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <p style={{ fontFamily: "'Schibsted Grotesk', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#eceef0", margin: 0 }}>
              If a few of those landed —
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#aeb2b8", margin: "0.375rem 0 0" }}>
              that's not a motivation problem. That's a pattern. Patterns are fixable.
            </p>
          </div>
          <a
            href="#book"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#ff8c00",
              color: "#121316",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "0.8rem 1.75rem",
              borderRadius: "14px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
