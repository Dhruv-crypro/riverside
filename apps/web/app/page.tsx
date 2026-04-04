import { auth } from "@clerk/nextjs/server";
import { prisma } from "@riverside/db";
import AuroraPanel from "../components/acernity/aurora-panel";
import BentoGrid from "../components/acernity/bento-grid";
import GradientButton from "../components/acernity/gradient-button";

export default async function HomePage() {
  const { userId } = await auth();
  let dbTime = "unavailable";
  try {
    const dbNow = await prisma.$queryRawUnsafe("SELECT NOW()::text as now");
    dbTime = Array.isArray(dbNow) && dbNow[0] ? (dbNow[0] as { now?: string }).now || "unknown" : "unknown";
  } catch (error) {
    dbTime = "database unavailable";
  }

  return (
    <main className="container rs-page">
      <section className="hero">
        <span className="kicker">RIVERSIDE CLONE • CINEMATIC EXPERIENCE</span>
        <h1>
          Record in <span className="gold">studio quality</span>, edit at lightning speed.
        </h1>
        <p>
          A top-tier black-and-gold interface inspired by modern creator tools with elegant motion-friendly surfaces and
          sharp visual hierarchy.
        </p>
        <div className="cta-row">
          <GradientButton href="/dashboard">Open Workspace</GradientButton>
          <GradientButton href="/pricing" variant="dark">
            View Pricing
          </GradientButton>
        </div>
      </section>

      <AuroraPanel title="Live project status" subtitle="Realtime overview from auth and data layer.">
        <div className="rs-stats">
          <div>
            <strong>{userId ? "Connected" : "Guest"}</strong>
            <span>Identity</span>
          </div>
          <div>
            <strong>{dbTime}</strong>
            <span>Database ping</span>
          </div>
          <div>
            <strong>4K + AI</strong>
            <span>Production pipeline</span>
          </div>
        </div>
      </AuroraPanel>

      <BentoGrid
        items={[
          {
            title: "Studio Rooms",
            description: "Host and guest feeds with local recording quality and premium controls.",
            icon: <span>🎥</span>
          },
          {
            title: "Magic Editor",
            description: "Cut, chapter, and publish using AI assisted timelines and highlights.",
            icon: <span>✂️</span>
          },
          {
            title: "Show Notes",
            description: "Generate summaries and clips instantly with one-click publishing.",
            icon: <span>📝</span>
          },
          {
            title: "Team Collaboration",
            description: "Invite producers and editors with secure roles and polished workflows.",
            icon: <span>🤝</span>
          }
        ]}
      />
    </main>
  );
}
