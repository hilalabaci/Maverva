import { LogosSection, LogosLead, LogosRow, LogoItem } from "../landing-styled";
import { LOGOS } from "../data";

export function LandingLogos() {
  return (
    <LogosSection>
      <LogosLead>Trusted by teams at</LogosLead>
      <LogosRow>
        {LOGOS.map(({ text, variant, italic }) => (
          <LogoItem key={text} $variant={variant}>
            {italic ? <em>{text}</em> : text}
          </LogoItem>
        ))}
      </LogosRow>
    </LogosSection>
  );
}
