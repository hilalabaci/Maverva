import {
  FeaturesSection,
  SecHead,
  SecIdx,
  SecH2,
  SecP,
  FeaturesGrid,
  FeatCard,
  VPlan,
  VDoc,
  VAuto,
} from "../landing-styled";
import { FEATURES } from "../data";
import type { ReactNode } from "react";

// Each feature's visual is unique — defined once alongside the data map
const FEATURE_VIZ: ReactNode[] = [
  <VPlan>
    <span className="lbl">Discovery</span>
    <span className="bar">
      <i style={{ left: 0, width: "40%" }} />
    </span>
    <span className="lbl">Design</span>
    <span className="bar b2">
      <i style={{ left: "25%", width: "45%" }} />
    </span>
    <span className="lbl">Build</span>
    <span className="bar b3">
      <i style={{ left: "45%", width: "50%" }} />
    </span>
    <span className="lbl">Ship</span>
    <span className="bar b4">
      <i style={{ left: "85%", width: "15%" }} />
    </span>
  </VPlan>,

  <VDoc>
    <h6>RFC-42 · Billing v2 rollout</h6>
    <div className="ln" />
    <div className="ln" />
    <div className="ln s" />
    <div className="cite">Blocks: MAV-407, MAV-420 · Owner: @sarah</div>
  </VDoc>,

  <VAuto>
    <div className="row">
      <span className="sq" /> WHEN issue label = bug
    </div>
    <div className="arr">▼</div>
    <div className="row t">
      <span className="sq" /> AND priority ≥ high
    </div>
    <div className="arr">▼</div>
    <div className="row x">
      <span className="sq" /> THEN assign on-call + notify #eng
    </div>
  </VAuto>,
];

export function LandingFeatures() {
  return (
    <FeaturesSection>
      <SecHead>
        <div>
          <SecIdx>— 01 / Product</SecIdx>
          <SecH2>
            Built for the <em>whole</em> delivery cycle.
          </SecH2>
        </div>
        <SecP>
          From the first backlog grooming to the Friday ship review, Maverva
          keeps every artefact — plans, docs, decisions — in one coherent
          workspace. No tab-juggling, no copy-paste, no "where is that spec?"
        </SecP>
      </SecHead>

      <FeaturesGrid>
        {FEATURES.map((feat, i) => (
          <FeatCard key={feat.num}>
            <div className="n">{feat.num}</div>
            <h3>{feat.title}</h3>
            <p>{feat.desc}</p>
            <div className="viz">{FEATURE_VIZ[i]}</div>
            <a className="link" href="/features">
              {feat.linkText}
            </a>
          </FeatCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
}
