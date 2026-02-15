import { SITE } from "../config/siteConfig";

export default function Admissions() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello ${SITE.name}, I want admission details.`
  )}`;

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
      <h1 style={{ marginTop: 0, color: "white" }}>Admissions</h1>
      <p style={{ color: "rgba(255,255,255,.75)" }}>
        Enquire via Call / WhatsApp for eligibility, fees and counselling.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href={`tel:${SITE.phone}`} style={{ padding: "10px 14px", background: "#2b6cff", borderRadius: 10, color: "#fff", textDecoration: "none", fontWeight: 800 }}>
          Call Now
        </a>
        <a href={wa} target="_blank" rel="noreferrer" style={{ padding: "10px 14px", background: "#d4af37", borderRadius: 10, color: "#111", textDecoration: "none", fontWeight: 900 }}>
          WhatsApp
        </a>
      </div>
    </div>
  );
}