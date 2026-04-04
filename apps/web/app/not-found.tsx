import GradientButton from "../components/acernity/gradient-button";

export default function NotFoundPage() {
  return (
    <main className="container rs-page">
      <section className="ac-aurora">
        <div className="ac-aurora-content" style={{ textAlign: "center", padding: "2.5rem 1.2rem" }}>
          <h3>Page not found</h3>
          <p>The page you requested does not exist. Let’s get you back to your workspace.</p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <GradientButton href="/">Back Home</GradientButton>
            <GradientButton href="/dashboard" variant="dark">
              Open Dashboard
            </GradientButton>
          </div>
        </div>
      </section>
    </main>
  );
}
