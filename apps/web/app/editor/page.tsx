import AuroraPanel from "../../components/acernity/aurora-panel";
import BentoGrid from "../../components/acernity/bento-grid";

export default function EditorPage() {
  return (
    <main className="container rs-page">
      <h1 className="rs-title">Magic Editor</h1>
      <p className="rs-subtitle">AI-assisted post-production with a polished and distraction-free interface.</p>

      <div className="rs-editor-grid">
        <AuroraPanel title="Timeline" subtitle="Cut, trim, and rearrange with precision.">
          <div className="rs-timeline" />
        </AuroraPanel>

        <BentoGrid
          items={[
            { title: "Auto Chapters", description: "Generate chapters from transcript structure.", icon: <span>🧠</span> },
            { title: "Filler Cleanup", description: "Remove ums and pauses automatically.", icon: <span>🎯</span> },
            { title: "Social Clips", description: "Create highlights ready for posting.", icon: <span>📱</span> },
            { title: "Show Notes", description: "Draft summaries and key moments instantly.", icon: <span>🪄</span> }
          ]}
        />
      </div>
    </main>
  );
}
