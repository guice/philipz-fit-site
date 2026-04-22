/* ==========================================================================
   FOOTER — CPZ Fitness "Spartan Engineer" design
   Simple dark footer with social links and tagline
   ========================================================================== */

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/philipz.fit/", icon: "IG" },
  { label: "TikTok", href: "https://www.tiktok.com/@philipz.fit", icon: "TT" },
  { label: "Facebook", href: "https://www.facebook.com/philipz.fit", icon: "FB" },
  { label: "Threads", href: "https://www.threads.net/@philipz.fit", icon: "TH" },
  { label: "Bluesky", href: "https://bsky.app/profile/philipz.fit", icon: "BS" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0a0b0d",
        borderTop: "1px solid rgba(255, 130, 0, 0.1)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#ff8200",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "0.85rem",
                color: "#0f1012",
              }}
            >
              CPZ
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#f0ede8",
                }}
              >
                CPZ Fitness
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#8a8f96",
                }}
              >
                // geek 2 greek
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { label: "About", href: "#about" },
              { label: "The Pipeline", href: "#pipeline" },
              { label: "Community", href: "#community" },
              { label: "Book a Call", href: "#book" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#8a8f96",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ff8200")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8f96")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`@philipz.fit on ${s.label}`}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  color: "#8a8f96",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff8200";
                  e.currentTarget.style.color = "#ff8200";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#8a8f96";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.05)", marginBottom: "1.5rem" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#6b7280",
              margin: 0,
            }}
          >
            © 2026 CPZ Fitness. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#6b7280",
              margin: 0,
            }}
          >
            built with discipline // shipped with intent
          </p>
        </div>
      </div>
    </footer>
  );
}
