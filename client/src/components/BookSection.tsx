/* ==========================================================================
   BOOK SECTION — CPZ Fitness (new ICA rebrand)
   FormFlow embed widget (div-target script, self-sizing) | facts card + agenda.
   bookingMode 'simple_link' swaps the embed for a plain link + button.
   ========================================================================== */

import { useEffect } from "react";

type BookingMode = "embedded_form" | "simple_link";

const BOOKING_MODE: BookingMode = "embedded_form";

const FORMFLOW_FORM_ID = "9e0388a0-bb27-4b48-9767-a2a8e16cb3d5";

// Inject FormFlow's widget.js once — it scans the DOM for #formflow-embed and renders into it
function useFormFlowScript(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    if (document.getElementById("formflow-embed-script")) return;
    const script = document.createElement("script");
    script.src = "https://myformflow.io/embed/widget.js";
    script.type = "text/javascript";
    script.id = "formflow-embed-script";
    document.body.appendChild(script);
  }, [enabled]);
}

const factsRows = [
  { key: "Response time", value: "< 24 hours" },
  { key: "Cost", value: "Free" },
  { key: "Format", value: "15-min video call" },
  { key: "Pressure", value: "None" },
];

const coverList = [
  { step: "01", text: "Where you're starting — training history, body, and the pattern that's kept you stuck" },
  { step: "02", text: "How the 16-Week Transformation actually works, phase by phase" },
  { step: "03", text: "Whether coaching together is the right next step — no pressure either way" },
];

export default function BookSection() {
  const isEmbeddedForm = BOOKING_MODE !== "simple_link";
  useFormFlowScript(isEmbeddedForm);

  return (
    <section id="book" style={{ padding: "7rem 0", position: "relative", overflow: "hidden" }}>
      {/* Soft orange glow, right side */}
      <div
        style={{
          position: "absolute",
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,140,0,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "3rem" }}>
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
            Free Consultation
          </div>
          <h2
            style={{
              fontFamily: "'Schibsted Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              color: "#eceef0",
              lineHeight: 1.05,
              margin: "0 0 0.75rem",
            }}
          >
            Let's talk about <span style={{ color: "#ff8c00" }}>what's actually going on.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#aeb2b8", lineHeight: 1.7, maxWidth: "560px", margin: 0 }}>
            No sales pitch, no pressure. 15 minutes to talk through where you're starting from and whether coaching together
            makes sense.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
          {/* Booking widget */}
          {isEmbeddedForm ? (
            <div style={{ background: "#1e2023", border: "1px solid rgba(255,140,0,0.15)", borderRadius: "4px", overflow: "hidden", padding: "1.5rem", height: "750px" }}>
              <div id="formflow-embed" data-form-id={FORMFLOW_FORM_ID} />
            </div>
          ) : (
            <div
              style={{
                background: "#1e2023",
                border: "1px solid rgba(255,140,0,0.15)",
                borderRadius: "4px",
                padding: "3rem 2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.25rem",
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#aeb2b8", margin: 0, maxWidth: "360px" }}>
                Book a 15-minute call — no forms to fill out here.
              </p>
              <a
                href="https://lnk.philipz.fit/free-consult"
                target="_blank"
                rel="noopener noreferrer"
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
                Free Consultation
              </a>
            </div>
          )}

          {/* Facts + agenda */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: "#1e2023", border: "1px solid rgba(255,140,0,0.12)", borderRadius: "4px", padding: "1.5rem 1.75rem" }}>
              {factsRows.map((fact) => (
                <div
                  key={fact.key}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.82rem",
                    padding: "0.4rem 0",
                  }}
                >
                  <span style={{ color: "#aeb2b8" }}>{fact.key}</span>
                  <span style={{ color: "#ff8c00", fontWeight: 600 }}>{fact.value}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "#1e2023", border: "1px solid rgba(255,140,0,0.12)", borderRadius: "4px", padding: "1.75rem" }}>
              <h3
                style={{
                  fontFamily: "'Schibsted Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#eceef0",
                  margin: "0 0 1.25rem",
                }}
              >
                What we'll cover
              </h3>
              {coverList.map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid rgba(255,140,0,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Schibsted Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#ff8c00",
                      flexShrink: 0,
                      minWidth: "1.75rem",
                    }}
                  >
                    {item.step}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#aeb2b8", lineHeight: 1.6, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
