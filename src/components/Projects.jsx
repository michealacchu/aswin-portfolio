import { useState } from "react";
import { Heart, ArrowUpRight } from "lucide-react";
import db from "../data/db.json";

export default function Projects() {
  const [likes, setLikes] = useState(
    () => db.projects.reduce((acc, p) => ({ ...acc, [p.id]: p.likes }), {})
  );
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    const isLiked = liked[id];
    setLiked((prev) => ({ ...prev, [id]: !isLiked }));
    setLikes((prev) => ({ ...prev, [id]: prev[id] + (isLiked ? -1 : 1) }));
  };

  return (
    <section id="projects" style={{ padding: "90px 24px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              color: "#3b82f6",
              letterSpacing: "0.12em",
              marginBottom: 10,
            }}
          >
            PORTFOLIO
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
            Recent{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0f0f1a 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Works.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 22,
          }}
        >
          {db.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              liked={liked[project.id]}
              likeCount={likes[project.id]}
              onToggle={() => toggleLike(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, liked, likeCount, onToggle }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: "white",
        borderRadius: 26,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.10)"
          : "0 4px 20px rgba(0,0,0,0.07)",
        border: `1px solid ${hovered ? "#e5e7eb" : "#f3f4f6"}`,
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient banner */}
      <div
        style={{
          height: 130,
          background: `linear-gradient(135deg, ${project.from} 0%, ${project.to} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft radial overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.18), transparent 70%)",
          }}
        />
        <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}>
          {project.icon}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Title row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          }}
        >
          <div style={{ flex: 1, paddingRight: 12 }}>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 17,
                color: "#0f0f1a",
                margin: "0 0 7px",
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                background: project.tagBg,
                color: project.tagColor,
                borderRadius: 9999,
                padding: "3px 11px",
                fontSize: 10,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                letterSpacing: "0.07em",
                border: `1px solid ${project.tagColor}33`,
              }}
            >
              {project.tag}
            </span>
          </div>

          <button
            style={{
              width: 38,
              height: 38,
              borderRadius: 13,
              background: "#f9fafb",
              border: "1.5px solid #f3f4f6",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9ca3af",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#eff6ff";
              e.currentTarget.style.color = "#3b82f6";
              e.currentTarget.style.borderColor = "#bfdbfe";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#f9fafb";
              e.currentTarget.style.color = "#9ca3af";
              e.currentTarget.style.borderColor = "#f3f4f6";
            }}
          >
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13,
            color: "#6b7280",
            margin: "0 0 18px",
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={onToggle}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              background: liked ? "#fff5f5" : "transparent",
              border: liked ? "1.5px solid #fca5a5" : "1.5px solid transparent",
              borderRadius: 9999,
              padding: "6px 12px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Heart
              size={15}
              style={{
                color: liked ? "#ef4444" : "#d1d5db",
                fill: liked ? "#ef4444" : "none",
                transition: "all 0.2s ease",
              }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: liked ? "#ef4444" : "#9ca3af",
                transition: "all 0.2s ease",
              }}
            >
              {likeCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
