import {
  HeroSection, Eyebrow, EyebrowPill, HeroGrid,
  Headline, Lede, HeroCtas, BtnAccent, BtnOutline,
  StatCol, StatItem, StatNum, StatLbl,
} from "../landing-styled";
import { HERO_STATS } from "../data";

export function LandingHero() {
  return (
    <HeroSection>
      <Eyebrow>
        <EyebrowPill>
          <b>NEW</b> Maverva 3.2 — timeline, bulk actions, SSO
        </EyebrowPill>
      </Eyebrow>

      <HeroGrid>
        <div>
          <Headline>
            Project management <em>for</em>
            <br />
            teams
            <br />
            who <em>ship.</em>
          </Headline>
          <Lede>
            A single source of truth for work across product, engineering and
            design. Plan sprints, track issues and keep the roadmap honest —
            without the meeting overhead.
          </Lede>
          <HeroCtas>
            <BtnAccent href="/register">
              Start free — no card required <span className="arr">→</span>
            </BtnAccent>
            <BtnOutline href="#">Book a demo</BtnOutline>
            <span className="meta">
              <b>14-day</b> trial · Cancel anytime
            </span>
          </HeroCtas>
        </div>

        <StatCol>
          {HERO_STATS.map(({ value, suffix, label }) => (
            <StatItem key={label}>
              <StatNum>
                {value}<span>{suffix}</span>
              </StatNum>
              <StatLbl>{label}</StatLbl>
            </StatItem>
          ))}
        </StatCol>
      </HeroGrid>
    </HeroSection>
  );
}
