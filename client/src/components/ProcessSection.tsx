/* ==========================================================================
   PROCESS SECTION — CPZ Fitness (new ICA rebrand)
   The 16-Week Transformation: four phase cards, what's-included strip,
   Confidence Guarantee callout, closing CTA. Replaces the old "Pipeline".
   ========================================================================== */

// Toggles the Confidence Guarantee callout card.
const SHOW_GUARANTEE = true;

const phaseCards = [
  {
    number: "01",
    weeks: "Weeks 1–4",
    title: "Foundation & Form",
    body: "Movement quality, joint prep, a pace that's actually finishable. This is the phase that interrupts 'push until it hurts' before it starts.",
  },
  {
    number: "02",
    weeks: "Weeks 5–8",
    title: "Progressive Hypertrophy",
    body: "Real loading, real muscle. You start training in rooms full of mirrors without narrating your body to yourself the whole time.",
  },
  {
    number: "03",
    weeks: "Weeks 9–12",
    title: "Strength & Density",
    body: "Strength climbs and your body visibly changes — including the part where people start noticing, and how that actually feels.",
  },
  {
    number: "04",
    weeks: "Weeks 13–16",
    title: "Peak & Polish",
    body: "Peak training, then the handoff. You finish the program running your own plan — not depending on mine.",
  },
];

const formatIncludes = [
  { text: "3–4 sessions a week, 30–45 minutes" },
  { text: "Weekly personal video check-ins — not a form reply" },
  { text: "Live coaching calls, every week" },
];

export default function ProcessSection() {
  return (
    <section id="process" style={{ padding: "7rem 0", background: "#1e2023", position: "relative", overflow: "hidden" }}>
      {/* Soft orange glow, left side */}
      <div
        style={{
          position: "absolute",
          left: "-200px",
          top: "30%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,140,0,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "3rem", maxWidth: "680px" }}>
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
            The Program
          </div>
          <h2
            style={{
              fontFamily: "'Schibsted Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              color: "#eceef0",
              lineHeight: 1.05,
              margin: "0 0 1rem",
            }}
          >
            The 16-Week <span style={{ color: "#ff8c00" }}>Transformation.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#aeb2b8", lineHeight: 1.7, margin: 0 }}>
            Four phases. Each one builds on the last — the body work and the identity work, running in parallel the whole way.
          </p>
        </div>

        {/* Phase cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {phaseCards.map((phase) => (
            <div
              key={phase.number}
              style={{
                background: "#121316",
                border: "1px solid rgba(255,140,0,0.12)",
                borderRadius: "4px",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ fontFamily: "'Schibsted Grotesk', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#ff8c00" }}>
                  {phase.number}
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.68rem",
                    color: "#aeb2b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {phase.weeks}
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "'Schibsted Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  color: "#eceef0",
                  margin: "0 0 0.625rem",
                  lineHeight: 1.25,
                }}
              >
                {phase.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#aeb2b8", lineHeight: 1.6, margin: 0 }}>
                {phase.body}
              </p>
            </div>
          ))}
        </div>

        {/* What's included strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            background: "rgba(255,140,0,0.1)",
            border: "1px solid rgba(255,140,0,0.1)",
            borderRadius: "4px",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          {formatIncludes.map((f) => (
            <div key={f.text} style={{ background: "#121316", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ color: "#ff8c00", fontSize: "0.9rem" }}>✓</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#eceef0" }}>{f.text}</span>
            </div>
          ))}
        </div>

        {/* Confidence Guarantee */}
        {SHOW_GUARANTEE && (
          <div
            style={{
              background: "rgba(255,140,0,0.06)",
              border: "1px solid rgba(255,140,0,0.25)",
              borderRadius: "4px",
              padding: "1.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Schibsted Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "1.15rem",
                color: "#ff8c00",
                margin: "0 0 0.625rem",
              }}
            >
              The Confidence Guarantee
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.92rem",
                color: "#aeb2b8",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "640px",
              }}
            >
              Log 80% of your workouts and show up to your weekly check-ins. If you don't feel more confident in your own skin
              by week 16, coaching continues free for 8 more weeks.
            </p>
          </div>
        )}

        {/* Closing CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#book"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#ff8c00",
              color: "#121316",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "0.9rem 2.25rem",
              borderRadius: "14px",
              textDecoration: "none",
            }}
          >
            Start with a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
