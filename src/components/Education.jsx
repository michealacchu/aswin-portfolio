import db from "../data/db.json";

export default function Education() {
  return (
    <section id="education" style={{ padding: "90px 24px", background: "white" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              color: "#8b5cf6",
              letterSpacing: "0.12em",
              marginBottom: 10,
            }}
          >
            EDUCATION
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
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0f0f1a 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education.
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical spine */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 3,
              background: "linear-gradient(to bottom, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
              transform: "translateX(-50%)",
              borderRadius: 9999,
            }}
          />

          {db.educationTimeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: i < db.educationTimeline.length - 1 ? 52 : 0,
                  flexDirection: isLeft ? "row" : "row-reverse",
                }}
              >
                {/* Card */}
                <div
                  style={{
                    flex: "0 0 calc(50% - 30px)",
                    background: "white",
                    borderRadius: 24,
                    padding: 28,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                    border: "1px solid #f3f4f6",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 16px 40px ${item.color}1a, 0 4px 20px rgba(0,0,0,0.07)`;
                    e.currentTarget.style.borderColor = `${item.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)";
                    e.currentTarget.style.borderColor = "#f3f4f6";
                  }}
                >
                  {/* Badge row */}
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}
                  >
                    <div
                      style={{
                        background: item.color,
                        color: "white",
                        borderRadius: 9999,
                        padding: "4px 14px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: 11,
                        letterSpacing: "0.04em",
                        flexShrink: 0,
                      }}
                    >
                      {item.shortDegree}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 12,
                        color: "#9ca3af",
                        fontWeight: 500,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

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
                    {item.degree}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 13,
                      color: item.color,
                      margin: "0 0 12px",
                      fontWeight: 600,
                    }}
                  >
                    {item.institution}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 13,
                      color: "#9ca3af",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Timeline node */}
                <div
                  style={{
                    flex: "0 0 60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: item.color,
                      border: "4px solid white",
                      boxShadow: `0 0 0 3px ${item.color}44, 0 4px 12px ${item.color}55`,
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>

                {/* Spacer */}
                <div style={{ flex: "0 0 calc(50% - 30px)" }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 640px) {
          #education .timeline-row { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
