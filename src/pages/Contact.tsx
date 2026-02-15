import { SITE } from "../config/siteConfig";

export default function Contact() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello ${SITE.name}, I want to contact you.`
  )}`;

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
      <h1 style={{ marginTop: 0, color: "white" }}>Contact</h1>
      <p style={{ color: "rgba(255,255,255,.75)" }}>
        {SITE.location} • Phone: {SITE.phone} • Email: {SITE.email}
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href={`tel:${SITE.phone}`} style={{ padding: "10px 14px", background: "#2b6cff", borderRadius: 10, color: "#fff", textDecoration: "none", fontWeight: 800 }}>
          Call
        </a>
        <a href={wa} target="_blank" rel="noreferrer" style={{ padding: "10px 14px", background: "#d4af37", borderRadius: 10, color: "#111", textDecoration: "none", fontWeight: 900 }}>
          WhatsApp
        </a>
        <a href={`mailto:${SITE.email}`} style={{ padding: "10px 14px", border: "1px solid rgba(255,255,255,.18)", borderRadius: 10, color: "#fff", textDecoration: "none", fontWeight: 800 }}>
          Email
        </a>
      </div>
    </div>
  );
}