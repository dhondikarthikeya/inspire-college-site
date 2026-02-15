import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 16px" }}>
      <h1 style={{ marginTop: 0, color: "white" }}>404</h1>
      <p style={{ color: "rgba(255,255,255,.75)" }}>Page not found.</p>
      <Link to="/" style={{ color: "#2b6cff", fontWeight: 900 }}>Go Home</Link>
    </div>
  );
}