import {
  PricingSection, SecHead, SecIdx, SecH2, SecP,
  PriceGrid, PlanCard, PopularBadge, PlanBtnAccent, PlanBtnOutline,
} from "../landing-styled";
import { PRICING_PLANS } from "../data";

export function LandingPricing() {
  return (
    <PricingSection>
      <SecHead>
        <div>
          <SecIdx>— 05 / Pricing</SecIdx>
          <SecH2>
            Honest pricing. <em>No seat taxes.</em>
          </SecH2>
        </div>
        <SecP>
          Simple, predictable plans that scale with the work, not the
          headcount. Every plan includes the full product — features aren't
          locked behind arbitrary tiers.
        </SecP>
      </SecHead>

      <PriceGrid>
        {PRICING_PLANS.map((plan) => (
          <PlanCard key={plan.slug} $featured={plan.featured}>
            <div className="pn">
              {plan.tagline}
              {plan.featured && <PopularBadge>Most popular</PopularBadge>}
            </div>
            <h4>{plan.name}</h4>
            <div className="sub">{plan.sub}</div>
            <div className="price">
              {plan.price}<small>{plan.priceSuffix}</small>
            </div>
            <ul>
              {plan.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>
            {plan.ctaVariant === "accent" ? (
              <PlanBtnAccent href="#">{plan.ctaLabel}</PlanBtnAccent>
            ) : (
              <PlanBtnOutline href="#">{plan.ctaLabel}</PlanBtnOutline>
            )}
          </PlanCard>
        ))}
      </PriceGrid>
    </PricingSection>
  );
}
