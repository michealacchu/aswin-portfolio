import { useState } from "react";
import { Download, CheckCircle } from "lucide-react";
import db from "../data/db.json";

export default function Certifications() {
  return (
    <section
      id="certificates"
      style={{
        padding: "90px 24px",
        background:
          "radial-gradient(ellipse 60% 50% at 10% 30%, #f0f9ff 0%, transparent 55%), #fafafa",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              color: "#0ea5e9",
              letterSpacing: "0.12em",
              marginBottom: 10,
            }}
          >
            CREDENTIALS
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: 44,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Official{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0f0f1a 0%, #0ea5e9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Certifications.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: 22,
          }}
        >
          {db.certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: "white",
        borderRadius: 26,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.10)"
          : "0 4px 20px rgba(0,0,0,0.06)",
        border: `1.5px solid ${hovered ? cert.color + "33" : "#f3f4f6"}`,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top section */}
      <div
        style={{
          padding: "28px 26px 22px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Icon & Provider Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 18,
              background: cert.bg,
              border: `1.5px solid ${cert.color}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              boxShadow: `0 4px 14px ${cert.color}22`,
              flexShrink: 0,
            }}
          >
            {cert.icon}
          </div>

          <div style={{ textAlign: "right" }}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                color: "#9ca3af",
                letterSpacing: "0.08em",
              }}
            >
              {cert.year}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 16,
            color: "#0f0f1a",
            margin: "0 0 6px",
            lineHeight: 1.3,
          }}
        >
          {cert.title}
        </h3>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            color: cert.color,
            margin: "0 0 16px",
            fontWeight: 600,
          }}
        >
          {cert.subtitle}
        </p>

        {/* Provider & Verified badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: 9999,
              padding: "5px 12px",
            }}
          >
            <CheckCircle size={12} style={{ color: "#22c55e" }} />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                color: "#16a34a",
                letterSpacing: "0.06em",
              }}
            >
              VERIFIED CREDENTIAL
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              color: "#9ca3af",
            }}
          >
            · {cert.provider}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#f3f4f6", margin: "0 22px" }} />

      {/* Download Button */}
      <div style={{ padding: "16px 22px" }}>
        <a
          href={cert.pdfUrl}
          download
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 9,
            background: hovered ? "#0f0f1a" : "#1e293b",
            color: "white",
            borderRadius: 14,
            padding: "12px 0",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.06em",
            transition: "all 0.25s ease",
            boxShadow: hovered
              ? `0 8px 24px ${cert.color}44`
              : "0 2px 8px rgba(0,0,0,0.15)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = cert.color;
            e.currentTarget.style.boxShadow = `0 8px 24px ${cert.color}55`;
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = hovered ? "#0f0f1a" : "#1e293b";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>
    </div>
  );
}
