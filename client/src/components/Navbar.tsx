/* ==========================================================================
   NAVBAR — CPZ Fitness "Spartan Engineer" design
   Sticky dark nav with orange CTA button always visible
   ========================================================================== */

import { useState, useEffect } from "react";
import CpzLogo from "./CpzLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "The Pipeline", href: "#pipeline" },
    { label: "Community", href: "#community" },
    { label: "Book a Call", href: "#book", primary: true },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(15, 16, 18, 0.97)" : "rgba(15, 16, 18, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255, 130, 0, 0.12)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo — ZF mark inline SVG */}
          <a href="#" className="flex items-center gap-2 group" style={{ textDecoration: "none" }}>
            <CpzLogo size={38} />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                color: "#f0ede8",
                textTransform: "uppercase",
              }}
            >
              CPZ FITNESS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.primary ? (
                <a key={link.label} href={link.href} className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#8a8f96",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ede8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8f96")}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#f0ede8",
                transition: "all 0.2s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#f0ede8",
                transition: "all 0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#f0ede8",
                transition: "all 0.2s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(255, 130, 0, 0.12)",
              padding: "1rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {navLinks.map((link) =>
              link.primary ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="btn-primary"
                  style={{ textAlign: "center", justifyContent: "center" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#f0ede8",
                    textDecoration: "none",
                    padding: "0.5rem 0",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
