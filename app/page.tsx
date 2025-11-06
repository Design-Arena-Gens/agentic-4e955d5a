const features = [
  {
    title: "Adaptive Insights Engine",
    description:
      "Sense patterns across product telemetry, customer signals, and team velocity to surface what matters before it becomes urgent.",
    icon: "⌘"
  },
  {
    title: "Threshold Orchestration",
    description:
      "Define and evolve operating thresholds that automate handoffs, reviews, and escalations with precision.",
    icon: "∞"
  },
  {
    title: "Narrative Dashboards",
    description:
      "Cut through noise with narrative briefings that connect metrics to context so every decision is grounded and clear.",
    icon: "✦"
  }
];

const metrics = [
  { value: "37%", label: "Cycle time reduction across pilot teams" },
  { value: "4.6x", label: "Faster signal-to-action conversion" },
  { value: "12", label: "Critical inflections captured monthly" }
];

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <nav className="nav">
          <span className="nav-logo">Liminal</span>
          <a className="nav-action" href="#early">
            Request Early Access
          </a>
        </nav>

        <section className="hero">
          <h1 className="hero-title">
            Navigate inflection points with precision and calm.
          </h1>
          <p className="hero-subtitle">
            Liminal is the operating layer for teams working at the edge of uncertainty. We blend
            observability, structured rituals, and adaptive intelligence so you can steer complex
            systems without losing the human signal.
          </p>
          <div className="hero-cta">
            <a className="button-primary" href="#early">
              Join the Founding Cohort
            </a>
            <a className="button-secondary" href="#stories">
              Explore How It Works
            </a>
          </div>

          <div className="metrics">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section id="stories">
          <h2 className="section-title">Designed for teams crossing critical thresholds</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon" aria-hidden>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="early" className="cta">
          <h2>Step into the liminal space.</h2>
          <p>
            We onboard a handful of product, ops, and research leaders each quarter. Share your
            context and we&apos;ll curate a bespoke activation plan.
          </p>
          <a className="button-primary" href="mailto:hello@liminal.studio">
            hello@liminal.studio
          </a>
        </section>
      </div>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Liminal Labs. Crafted between thresholds.{" "}
          <a href="mailto:hello@liminal.studio">Start a conversation</a>.
        </div>
      </footer>
    </main>
  );
}
