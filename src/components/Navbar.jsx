import { useState, useEffect } from "react";

const links = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CERTIFICATES", "CONTACT"];

export default function Navbar({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        width: "calc(100% - 40px)",
        maxWidth: 900,
        background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: 9999,
        boxShadow: scrolled
          ? "0 8px 32px rgba(0,0,0,0.10)"
          : "0 4px 20px rgba(0,0,0,0.06)",
        padding: "10px 16px 10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 900,
          fontSize: 17,
          background: "linear-gradient(135deg, #0f0f1a 0%, #3b82f6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "0.03em",
          flexShrink: 0,
        }}
      >
        ASWIN E
      </span>

      {/* Desktop Links */}
      <div
        className="nav-links"
        style={{ display: "flex", gap: 2, alignItems: "center" }}
      >
        {links.map((link) => (
          <button
            key={link}
            onClick={() => onNav(link.toLowerCase())}
            style={{
              padding: "7px 13px",
              borderRadius: 9999,
              border: "none",
              cursor: "pointer",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 10.5,
              letterSpacing: "0.07em",
              background:
                active === link.toLowerCase() ? "#0f0f1a" : "transparent",
              color:
                active === link.toLowerCase() ? "white" : "#6b7280",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (active !== link.toLowerCase()) {
                e.currentTarget.style.color = "#0f0f1a";
                e.currentTarget.style.background = "#f3f4f6";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== link.toLowerCase()) {
                e.currentTarget.style.color = "#6b7280";
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Right side: Sign In + Hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            border: "1.5px solid #e5e7eb",
            background: "white",
            cursor: "pointer",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 5,
            padding: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 18,
                height: 2,
                background: "#374151",
                borderRadius: 2,
                transition: "all 0.2s",
                transformOrigin: "center",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(3px, 3px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(3px, -3px)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(14px)",
            borderRadius: 24,
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => { onNav(link.toLowerCase()); setMenuOpen(false); }}
              style={{
                padding: "12px 16px",
                borderRadius: 14,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.07em",
                textAlign: "left",
                background:
                  active === link.toLowerCase() ? "#0f0f1a" : "transparent",
                color:
                  active === link.toLowerCase() ? "white" : "#374151",
                transition: "all 0.2s ease",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
