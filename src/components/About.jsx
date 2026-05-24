import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { epoch: 20, accuracy: 72, val: 68 },
  { epoch: 30, accuracy: 78, val: 74 },
  { epoch: 40, accuracy: 83, val: 80 },
  { epoch: 50, accuracy: 88, val: 85 },
  { epoch: 60, accuracy: 92, val: 89 },
  { epoch: 70, accuracy: 95, val: 93 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "white",
          borderRadius: 12,
          padding: "10px 14px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          border: "none",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 12,
        }}
      >
        <p style={{ color: "#6b7280", marginBottom: 4 }}>Epoch {label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color, fontWeight: 700, margin: "2px 0" }}>
            {p.name === "accuracy" ? "Accuracy" : "Val Loss"}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function card(hover, setHover, id) {
  return {
    style: {
      transition: "all 0.3s ease",
      transform: hover === id ? "translateY(-5px)" : "translateY(0)",
      boxShadow:
        hover === id
          ? "0 20px 50px rgba(0,0,0,0.10)"
          : "0 4px 20px rgba(0,0,0,0.06)",
    },
    onMouseEnter: () => setHover(id),
    onMouseLeave: () => setHover(null),
  };
}

export default function About() {
  const [progress, setProgress] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setProgress(92), 600);
    return () => clearTimeout(t);
  }, []);

  const R = 54;
  const circ = 2 * Math.PI * R;
  const offset = circ - (progress / 100) * circ;

  return (
    <section
      id="about"
      style={{
        padding: "90px 24px",
        background:
          "radial-gradient(ellipse 70% 50% at 20% 80%, #f5f3ff 0%, transparent 55%), #fafafa",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
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
            ABOUT ME
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
            Know{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0f0f1a 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Who I Am.
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 22,
          }}
        >
          {/* Card 1 — Circular Progress */}
          <div
            {...card(hover, setHover, 1)}
            style={{
              background: "white",
              borderRadius: 28,
              padding: 32,
              cursor: "default",
              ...card(hover, setHover, 1).style,
            }}
          >
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 18,
                color: "#0f0f1a",
                marginBottom: 28,
              }}
            >
              AI &amp; ML Stack
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                marginBottom: 24,
              }}
            >
              <svg width={130} height={130} viewBox="0 0 130 130">
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                {/* Track */}
                <circle
                  cx={65}
                  cy={65}
                  r={R}
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth={10}
                />
                {/* Progress arc */}
                <circle
                  cx={65}
                  cy={65}
                  r={R}
                  fill="none"
                  stroke="url(#progressGrad)"
                  strokeWidth={10}
                  strokeLinecap="round"
                  strokeDasharray={circ}
                  strokeDashoffset={offset}
                  style={{
                    transition: "stroke-dashoffset 1.6s cubic-bezier(0.25,1,0.5,1)",
                  }}
                  transform="rotate(-90 65 65)"
                />
              </svg>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 900,
                    fontSize: 30,
                    color: "#0f0f1a",
                    lineHeight: 1,
                  }}
                >
                  {progress}%
                </div>
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 10,
                    color: "#6b7280",
                    fontWeight: 600,
                    marginTop: 3,
                  }}
                >
                  Python &amp; AI
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "TensorFlow / PyTorch", color: "#3b82f6", pct: 88 },
                { label: "LangChain / RAG",       color: "#8b5cf6", pct: 82 },
                { label: "OpenAI API / GPT-4",    color: "#ec4899", pct: 95 },
                { label: "Gemini/Pro",    color: "#27c72d", pct: 85 },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 12,
                        color: "#374151",
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 11,
                        color: item.color,
                        fontWeight: 700,
                      }}
                    >
                      {item.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 5,
                      borderRadius: 9999,
                      background: "#f3f4f6",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${item.pct}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}99)`,
                        borderRadius: 9999,
                        transition: "width 1.4s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Dark Bio */}
          <div
            {...card(hover, setHover, 2)}
            style={{
              background: "#0f172a",
              borderRadius: 28,
              padding: 34,
              cursor: "default",
              position: "relative",
              overflow: "hidden",
              ...card(hover, setHover, 2).style,
            }}
          >
            {/* decorative blobs */}
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "rgba(59,130,246,0.07)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -30,
                left: -30,
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "rgba(139,92,246,0.07)",
                pointerEvents: "none",
              }}
            />

            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 9.5,
                fontWeight: 700,
                color: "#3b82f6",
                letterSpacing: "0.15em",
              }}
            >
              WHO AM I
            </span>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: 22,
                color: "white",
                margin: "14px 0 18px",
                lineHeight: 1.25,
              }}
            >
              Building the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Intelligent Future
              </span>
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                color: "#94a3b8",
                lineHeight: 1.75,
                margin: "0 0 24px",
              }}
            >
              As an AI Developer, I build intelligent systems using Python. I
              specialize in Generative AI, NLP, and ML model deployment —
              transforming raw data into real-world decisions.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {["Gen AI", "NLP", "ML Ops", "API Dev", "RAG"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(59,130,246,0.14)",
                    color: "#93c5fd",
                    borderRadius: 9999,
                    padding: "5px 13px",
                    fontSize: 11,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                { num: "3+", label: "Years Coding" },
                { num: "15+", label: "Projects Built" },
                { num: "15",   label: "Certifications" },
                { num: "97%", label: "Model Accuracy" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 14,
                    padding: "12px 14px",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 900,
                      fontSize: 22,
                      color: "white",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 11,
                      color: "#64748b",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 — Line Chart */}
          <div
            {...card(hover, setHover, 3)}
            style={{
              background: "white",
              borderRadius: 28,
              padding: 32,
              cursor: "default",
              ...card(hover, setHover, 3).style,
            }}
          >
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 18,
                color: "#0f0f1a",
                marginBottom: 4,
              }}
            >
              Model Performance
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 12,
                color: "#9ca3af",
                marginBottom: 20,
              }}
            >
              Accuracy over training epochs (20 → 70)
            </p>

            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={performanceData} margin={{ top: 4, right: 4, bottom: 0, left: -16 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis
                  dataKey="epoch"
                  tick={{
                    fontSize: 10,
                    fill: "#9ca3af",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                />
                <YAxis
                  domain={[60, 100]}
                  tick={{
                    fontSize: 10,
                    fill: "#9ca3af",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#3b82f6"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#3b82f6", strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="val"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  dot={{ r: 3, fill: "#8b5cf6", strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div
              style={{ display: "flex", gap: 18, marginTop: 14, flexWrap: "wrap" }}
            >
              {[
                { color: "#3b82f6", label: "Accuracy",  dash: false },
                { color: "#8b5cf6", label: "Val Score", dash: true  },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", alignItems: "center", gap: 7 }}
                >
                  <div
                    style={{
                      width: 26,
                      height: item.dash ? 0 : 3,
                      borderTop: item.dash ? `2px dashed ${item.color}` : "none",
                      background: item.dash ? "transparent" : item.color,
                      borderRadius: 2,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 11,
                      color: "#6b7280",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
