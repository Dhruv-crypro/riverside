export default function LoadingPage() {
  return (
    <main className="container rs-page">
      <div className="loading-shell" aria-label="Loading content">
        <div className="loading-bar" />
        <div className="loading-grid">
          <div className="loading-card" />
          <div className="loading-card" />
          <div className="loading-card" />
        </div>
      </div>
    </main>
  );
}
