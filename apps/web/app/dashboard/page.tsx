import AuroraPanel from "../../components/acernity/aurora-panel";
import BentoGrid from "../../components/acernity/bento-grid";
import GradientButton from "../../components/acernity/gradient-button";

export default function DashboardPage() {
  return (
    <main className="container rs-page">
      <h1 className="rs-title">Command Center</h1>
      <p className="rs-subtitle">A premium dashboard layout inspired by Riverside’s creator-first experience.</p>

      <div className="cta-row" style={{ marginBottom: "1rem" }}>
        <GradientButton href="/studio">Enter Studio</GradientButton>
        <GradientButton href="/recordings" variant="dark">
          Open Library
        </GradientButton>
      </div>

      <AuroraPanel title="Today" subtitle="Everything important in one glance.">
        <div className="rs-stats">
          <div>
            <strong>7</strong>
            <span>Scheduled sessions</span>
          </div>
          <div>
            <strong>18</strong>
            <span>Pending edits</span>
          </div>
          <div>
            <strong>99.2%</strong>
            <span>Average audio health</span>
          </div>
        </div>
      </AuroraPanel>

      <BentoGrid
        items={[
          { title: "Upcoming Rooms", description: "Jump into your next recording in one click.", icon: <span>📅</span> },
          { title: "Team Activity", description: "Track producer and editor updates in real-time.", icon: <span>👥</span> },
          { title: "Asset Health", description: "See upload and transcode status across projects.", icon: <span>📦</span> },
          { title: "Publishing", description: "Push episodes to your channels with confidence.", icon: <span>🚀</span> }
        ]}
      />
    </main>
  );
}
