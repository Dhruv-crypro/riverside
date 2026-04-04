import AuroraPanel from "../../components/acernity/aurora-panel";
import GradientButton from "../../components/acernity/gradient-button";

export default function StudioPage() {
  return (
    <main className="container rs-page">
      <h1 className="rs-title">Studio Room</h1>
      <p className="rs-subtitle">A cinematic room layout for host, guests, and producer control.</p>

      <AuroraPanel title="Live Room" subtitle="Preview participants and recording health.">
        <div className="rs-room-grid">
          <div className="rs-room-tile">Host Camera</div>
          <div className="rs-room-tile">Guest A</div>
          <div className="rs-room-tile">Guest B</div>
          <div className="rs-room-tile">Producer Monitor</div>
        </div>
      </AuroraPanel>

      <div className="cta-row" style={{ marginTop: "1rem" }}>
        <GradientButton href="/editor">Open Magic Editor</GradientButton>
        <GradientButton href="/dashboard" variant="dark">
          Back to Dashboard
        </GradientButton>
      </div>
    </main>
  );
}
