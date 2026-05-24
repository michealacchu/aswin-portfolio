import { useState } from "react";
import { Linkedin, Github, Instagram, Mail, Paperclip, Send, CheckCircle } from "lucide-react";

const socials = [
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    sub: "Connect professionally",
    color: "#0077b5",
    bg: "#e8f4fd",
    hoverBg: "#d0eaf8",
    href: "https://www.linkedin.com/in/aswin-aswin-elangovan-129312340",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    sub: "View my repositories",
    color: "#181717",
    bg: "#f0f0f0",
    hoverBg: "#e2e2e2",
    href: "https://github.com/michealacchu",
  },
  {
    icon: <Instagram size={20} />,
    label: "Instagram",
    sub: "Follow my journey",
    color: "#e1306c",
    bg: "#fde8f0",
    hoverBg: "#fad4e4",
    href: "https://www.instagram.com/_.xchu._/",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    sub: "aswinelangovan007@gmail.com",
    color: "#ea4335",
    bg: "#fdecea",
    hoverBg: "#f9d6d3",
    href: "mailto:aswinelangovan007@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [fileName, setFileName] = useState(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);

    try {
      // To fix the "not getting email" issue, we use Formspree.
      // 1. Go to https://formspree.io, create a free account, and get your "Form ID".
      // 2. Replace 'YOUR_FORM_ID' below with that ID.
      const response = await fetch("https://formspree.io/f/xojbnqln", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      alert("Error sending message. Please try again later or use the email link directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "70px 24px 80px",
        background:
          "radial-gradient(ellipse 70% 60% at 50% 100%, #eff6ff 0%, transparent 60%), #f9fafb",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
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
            GET IN TOUCH
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: 36,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Let's work{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              together.
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {/* ── Left Column ── */}
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Social grid */}
            <div
              style={{
                background: "white",
                borderRadius: 28,
                padding: 24,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: s.bg,
                    borderRadius: 18,
                    padding: "18px 14px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    transition: "all 0.25s ease",
                    border: "1.5px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = s.hoverBg;
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = `${s.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = s.bg;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  <div style={{ color: s.color }}>{s.icon}</div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: 13,
                        color: "#0f0f1a",
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 11,
                        color: "#9ca3af",
                        marginTop: 2,
                        fontWeight: 500,
                      }}
                    >
                      {s.sub}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Why reach out card */}
            <div
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                borderRadius: 28,
                padding: "28px 26px",
                boxShadow: "0 12px 40px rgba(37,99,235,0.28)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  pointerEvents: "none",
                }}
              />
              <h4
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: 20,
                  color: "white",
                  margin: "0 0 12px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Why reach out?
              </h4>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13.5,
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.7,
                  margin: "0 0 18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                I'm open to full-time roles, freelance AI projects, and exciting
                collaborations. If you have an interesting problem, I have the
                neural network for it. 🚀
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
                {["Freelance", "Full-time", "Collaboration"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      color: "white",
                      borderRadius: 9999,
                      padding: "5px 14px",
                      fontSize: 11,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Contact Form ── */}
          <div style={{ flex: "1 1 380px" }}>
            <div
              style={{
                background: "white",
                borderRadius: 28,
                padding: "36px 32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              {sent ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 20px",
                    textAlign: "center",
                    gap: 18,
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "#f0fdf4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 0 8px #dcfce7",
                    }}
                  >
                    <CheckCircle size={36} style={{ color: "#22c55e" }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 900,
                        fontSize: 22,
                        color: "#0f0f1a",
                        margin: "0 0 8px",
                      }}
                    >
                      Message Sent! 🎉
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 14,
                        color: "#6b7280",
                        margin: 0,
                      }}
                    >
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); setFileName(null); }}
                    style={{
                      padding: "12px 28px",
                      borderRadius: 9999,
                      background: "#f3f4f6",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#374151",
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 900,
                      fontSize: 22,
                      color: "#0f0f1a",
                      margin: "0 0 4px",
                    }}
                  >
                    Send a Message
                  </h3>

                  {/* Full Name */}
                  <div>
                    <label style={labelStyle}>FULL NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#3b82f6";
                        e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e5e7eb";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#3b82f6";
                        e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e5e7eb";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hi Aswin, I'd love to discuss..."
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#3b82f6";
                        e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.12)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e5e7eb";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Attach File */}
                  <div>
                    <label style={labelStyle}>ATTACHMENT (OPTIONAL)</label>
                    <label
                      htmlFor="file-upload"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "12px 16px",
                        borderRadius: 14,
                        border: "1.5px dashed #e5e7eb",
                        cursor: "pointer",
                        background: "#fafafa",
                        transition: "all 0.2s ease",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 13,
                        color: fileName ? "#3b82f6" : "#9ca3af",
                        fontWeight: fileName ? 600 : 500,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#3b82f6";
                        e.currentTarget.style.background = "#eff6ff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#e5e7eb";
                        e.currentTarget.style.background = "#fafafa";
                      }}
                    >
                      <Paperclip size={15} style={{ color: "#3b82f6", flexShrink: 0 }} />
                      {fileName ? fileName : "Attach a file (PDF, DOC, PNG...)"}
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleFile}
                      style={{ display: "none" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      background: sending
                        ? "#6b7280"
                        : "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: 14,
                      padding: "16px 0",
                      cursor: sending ? "not-allowed" : "pointer",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: 13,
                      letterSpacing: "0.05em",
                      transition: "all 0.3s ease",
                      boxShadow: sending ? "none" : "0 6px 24px rgba(37,99,235,0.32)",
                    }}
                    onMouseEnter={(e) => {
                      if (!sending) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 32px rgba(37,99,235,0.42)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = sending ? "none" : "0 6px 24px rgba(37,99,235,0.32)";
                    }}
                  >
                    {sending ? (
                      <>
                        <div
                          style={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTopColor: "white",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

const labelStyle = {
  display: "block",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: 10.5,
  fontWeight: 800,
  color: "#6b7280",
  letterSpacing: "0.10em",
  marginBottom: 8,
};

const inputStyle = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: 14,
  border: "1.5px solid #e5e7eb",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: 14,
  color: "#0f0f1a",
  background: "#fafafa",
  outline: "none",
  transition: "all 0.2s ease",
  boxSizing: "border-box",
};
