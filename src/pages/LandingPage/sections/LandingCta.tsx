import { CtaSection, CtaBtnAccent, CtaBtnOutline } from "../landing-styled";

export function LandingCta() {
  return (
    <CtaSection>
      <div className="eyebrow-cta">— Start in two minutes</div>
      <h2>
        The work is <em>hard enough.</em>
        <br />
        The tool shouldn't be.
      </h2>
      <p>
        Spin up a workspace, import from Jira or Linear, and invite your team.
        No credit card, no sales call required.
      </p>
      <div className="act">
        <CtaBtnAccent href="/register">
          Start free — it takes 2 minutes <span className="arr">→</span>
        </CtaBtnAccent>
        <CtaBtnOutline href="#">Talk to sales</CtaBtnOutline>
      </div>
    </CtaSection>
  );
}
