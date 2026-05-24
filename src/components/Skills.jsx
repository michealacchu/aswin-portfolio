import { useState } from "react";
import db from "../data/db.json";

const FILTERS = ["SHOW ALL", "LANGUAGES", "FRAMEWORK", "VERSIONS", "DATABASE"];

export default function Skills() {
  const [filter, setFilter] = useState("SHOW ALL");

  const visible =
    filter === "SHOW ALL"
      ? db.skills
      : db.skills.filter((s) => s.category === filter);

  return (
    <section
      id="skills"
      style={{
        padding: "90px 24px",
        background:
          "radial-gradient(ellipse 60% 50% at 80% 20%, #fdf4ff 0%, transparent 55%), #fafafa",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 44 }}>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              color: "#ec4899",
              letterSpacing: "0.12em",
              marginBottom: 10,
            }}
          >
            TECH STACK
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
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0f0f1a 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stack.
            </span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}
        >
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "9px 22px",
                  borderRadius: 9999,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.07em",
                  background: active ? "#0f0f1a" : "white",
                  color: active ? "white" : "#6b7280",
                  boxShadow: active
                    ? "0 4px 16px rgba(0,0,0,0.18)"
                    : "0 2px 10px rgba(0,0,0,0.06)",
                  transition: "all 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "#f3f4f6";
                    e.currentTarget.style.color = "#0f0f1a";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "#6b7280";
                  }
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))",
            gap: 16,
          }}
        >
          {visible.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered ? skill.bg : "white",
        borderRadius: 20,
        padding: "22px 12px 18px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.09)"
          : "0 2px 12px rgba(0,0,0,0.055)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.28s ease",
        cursor: "default",
        border: `1.5px solid ${hovered ? skill.color + "33" : "transparent"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontSize: 30, lineHeight: 1 }}>{skill.emoji}</span>
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: 12,
          color: "#1e293b",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {skill.name}
      </span>
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 9,
          fontWeight: 700,
          color: skill.color,
          letterSpacing: "0.06em",
          background: skill.bg,
          borderRadius: 9999,
          padding: "3px 9px",
          border: `1px solid ${skill.color}33`,
        }}
      >
        {skill.category}
      </span>
    </div>
  );
}
