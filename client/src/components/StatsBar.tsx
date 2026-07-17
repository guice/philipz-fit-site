/* ==========================================================================
   STATS BAR — CPZ Fitness (new ICA rebrand)
   Horizontal band of key credibility stats between hero and For section
   ========================================================================== */

const statItems = [
  { number: "16", label: "Week Transformation" },
  { number: "15+", label: "Years Training" },
  { number: "10", label: "Years Out" },
  { number: "FREE", label: "15-Min Consultation" },
];

export default function StatsBar() {
  return (
    <section
      style={{
        background: "#1e2023",
        borderTop: "1px solid rgba(255,140,0,0.15)",
        borderBottom: "1px solid rgba(255,140,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {statItems.map((stat) => (
          <div key={stat.label} style={{ textAlign: "center", padding: "1.75rem 2rem", flex: 1, minWidth: "180px" }}>
            <div
              style={{
                fontFamily: "'Schibsted Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "2.75rem",
                color: "#ff8c00",
                lineHeight: 1,
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.68rem",
                color: "#aeb2b8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "0.5rem",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
