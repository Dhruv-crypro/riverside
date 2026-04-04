import GradientButton from "../../components/acernity/gradient-button";

export default function PricingPage() {
  return (
    <main className="container rs-page">
      <h1 className="rs-title">Pricing</h1>
      <p className="rs-subtitle">Simple, bold plans for solo creators, teams, and production studios.</p>
      <div className="pricing-switch">Monthly <span>•</span> Annual (save 20%)</div>

      <section className="pricing-grid">
        <article className="pricing-card">
          <span className="pricing-tag">Starter</span>
          <h3>$19/mo</h3>
          <small>Billed monthly</small>
          <p>For solo creators recording weekly episodes.</p>
          <ul>
            <li>5 studio sessions / month</li>
            <li>1080p recording</li>
            <li>Basic AI summaries</li>
          </ul>
          <GradientButton href="/sign-up" variant="dark">
            Start Starter
          </GradientButton>
        </article>

        <article className="pricing-card pricing-card-featured">
          <span className="pricing-tag">Pro</span>
          <h3>$49/mo</h3>
          <small>Billed monthly</small>
          <p>Best for growing podcasts and content teams.</p>
          <ul>
            <li>Unlimited sessions</li>
            <li>4K local tracks</li>
            <li>Advanced magic editor tools</li>
          </ul>
          <GradientButton href="/sign-up">Choose Pro</GradientButton>
        </article>

        <article className="pricing-card">
          <span className="pricing-tag">Studio</span>
          <h3>$129/mo</h3>
          <small>Billed monthly</small>
          <p>For agencies and production-grade workflows.</p>
          <ul>
            <li>Priority rendering</li>
            <li>Multi-brand workspaces</li>
            <li>Dedicated onboarding</li>
          </ul>
          <GradientButton href="/sign-up" variant="dark">
            Contact Sales
          </GradientButton>
        </article>
      </section>
    </main>
  );
}
