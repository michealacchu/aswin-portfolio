import { useState, useEffect } from "react";
import { Eye, Download, Github, Linkedin, Instagram, Mail } from "lucide-react";

const TERMINAL_LINES = [
  { text: "$ python3 portfolio.py --status 'active' --role 'AI Developer'", type: "cmd" },
  { text: "", type: "empty" },
  { text: "[✓] Loading profile data...", type: "success" },
  { text: "[✓] Initializing AI/ML modules...", type: "success" },
  { text: "[✓] Connecting to GitHub API...", type: "success" },
  { text: "[✓] Building neural pathways...", type: "success" },
  { text: "[✓] Status: ACTIVE & READY", type: "success" },
  { text: "", type: "empty" },
  { text: ">>> Welcome to Aswin's Portfolio 🚀", type: "highlight" },
];

const socials = [
  { icon: <Linkedin size={15} />, label: "LinkedIn",  color: "#0077b5", hoverBg: "#e7f3fb", href: "https://www.linkedin.com/in/aswin-aswin-elangovan-129312340" },
  { icon: <Github size={15} />,   label: "GitHub",    color: "#181717", hoverBg: "#f0f0f0", href: "https://github.com/michealacchu" },
  { icon: <Instagram size={15} />,label: "Instagram", color: "#e1306c", hoverBg: "#fde8f0", href: "https://www.instagram.com/_.xchu._/" },
  { icon: <Mail size={15} />,     label: "Email",     color: "#ea4335", hoverBg: "#fdecea", href: "mailto:aswinelangovan007@gmail.com" },
];

export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [charIdx, setCharIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (lineIdx >= TERMINAL_LINES.length) return;
    const currentLine = TERMINAL_LINES[lineIdx];

    if (currentLine.type === "empty") {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, { ...currentLine, text: "" }]);
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 120);
      return () => clearTimeout(t);
    }

    if (charIdx < currentLine.text.length) {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last && last.type === currentLine.type && last.lineIdx === lineIdx) {
            copy[copy.length - 1] = { ...last, text: last.text + currentLine.text[charIdx] };
          } else {
            copy.push({ ...currentLine, text: currentLine.text[charIdx], lineIdx });
          }
          return copy;
        });
        setCharIdx((c) => c + 1);
      }, currentLine.type === "cmd" ? 28 : 14);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 60);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx]);

  const lineColor = (type) => {
    if (type === "cmd")       return "#89b4fa";
    if (type === "success")   return "#a6e3a1";
    if (type === "highlight") return "#f5c2e7";
    return "#cdd6f4";
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        background:
          "radial-gradient(ellipse 80% 60% at 70% 40%, #eff6ff 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 10% 70%, #fdf4ff 0%, transparent 55%), #f9fafb",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 28,
          maxWidth: 1000,
          width: "100%",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        {/* ── Profile Card ── */}
        <div
          style={{
            flex: "1 1 300px",
            background: "white",
            borderRadius: 32,
            padding: "32px 28px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* decorative blobs */}
          <div
            style={{
              position: "absolute", top: -50, right: -50,
              width: 200, height: 200, borderRadius: "50%",
              background: "radial-gradient(circle, #dbeafe, #ede9fe)",
              opacity: 0.45,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute", bottom: -30, left: -30,
              width: 130, height: 130, borderRadius: "50%",
              background: "radial-gradient(circle, #fce7f3, #ede9fe)",
              opacity: 0.35,
              pointerEvents: "none",
            }}
          />

          {/* Avatar */}
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              boxShadow: "0 8px 28px rgba(59,130,246,0.28), 0 0 0 4px white, 0 0 0 6px #dbeafe",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              padding: 0,
            }}
          >
            <img
              src="/profile photo.png"
              alt="Aswin"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Name */}
          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#9ca3af",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 6,
                letterSpacing: "0.04em",
              }}
            >
              Hi there, I'm
            </p>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: 34,
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              <span style={{ color: "#0f0f1a" }}>As</span>
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                win E
              </span>
            </h1>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#6b7280",
                fontSize: 12.5,
                fontWeight: 600,
                marginTop: 8,
                letterSpacing: "0.04em",
              }}
            >
              Generative AI &amp; Python Developer
            </p>
          </div>

          {/* Views badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#f0f9ff",
              borderRadius: 9999,
              padding: "8px 18px",
              border: "1px solid #bae6fd",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Eye size={13} style={{ color: "#3b82f6" }} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 13,
                color: "#0369a1",
              }}
            >
              {views.toLocaleString()}
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: 11,
                color: "#64748b",
                letterSpacing: "0.06em",
              }}
            >
              PROFILE VIEWS
            </span>
          </div>

          {/* Social icons */}
          <div
            style={{ display: "flex", gap: 10, position: "relative", zIndex: 1 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                onClick={() => setViews(prev => prev + 1)}
                rel="noreferrer"
                title={s.label}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 13,
                  border: "1.5px solid #f0f0f0",
                  background: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: s.color,
                  transition: "all 0.22s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = s.hoverBg;
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.09)";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download="Aswin_Resume.pdf"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              background: "#0f0f1a",
              color: "white",
              borderRadius: 9999,
              padding: "14px 32px",
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: "0.07em",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(15,15,26,0.25)",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3b82f6";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 28px rgba(59,130,246,0.38)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0f0f1a";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(15,15,26,0.25)";
            }}
          >
            <Download size={14} />
            DOWNLOAD RESUME
          </a>
        </div>

        {/* ── Terminal Card ── */}
        <div style={{ flex: "1 1 400px", position: "relative" }}>
          <div
            style={{
              background: "#1e1e2e",
              borderRadius: 28,
              overflow: "hidden",
              boxShadow:
                "0 30px 70px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06)",
              height: "100%",
              minHeight: 320,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Window bar */}
            <div
              style={{
                background: "#181825",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexShrink: 0,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 13,
                      height: 13,
                      borderRadius: "50%",
                      background: c,
                      boxShadow: `0 0 8px ${c}66`,
                    }}
                  />
                ))}
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "#585b70",
                    letterSpacing: "0.04em",
                  }}
                >
                  portfolio.py — python3
                </span>
              </div>
            </div>

            {/* Terminal content */}
            <div
              style={{
                padding: "24px 26px 80px",
                fontFamily:
                  "'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace",
                fontSize: 13,
                lineHeight: 1.85,
                flex: 1,
                overflowY: "auto",
              }}
            >
              {displayedLines.map((line, i) => (
                <div key={i} style={{ color: lineColor(line.type) }}>
                  {line.text || "\u00A0"}
                </div>
              ))}
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 16,
                  background: "#89b4fa",
                  verticalAlign: "middle",
                  animation: "blink 1s steps(1) infinite",
                  borderRadius: 1,
                }}
              />
            </div>
          </div>

          {/* Glassmorphism Badge */}
          <div
            style={{
              position: "absolute",
              bottom: 22,
              right: 22,
              background: "rgba(30, 30, 46, 0.7)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 18,
              padding: "13px 20px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              📚
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.12em",
                  marginBottom: 2,
                }}
              >
                CURRENTLY
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 800,
                  color: "white",
                }}
              >
                Studying Machine Learning
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
