import {
  NavWrap, NavInner, Brand, BrandMark, BrandDot,
  NavLinks, NavCta, BtnGhost, BtnPrimary,
} from "../landing-styled";
import { NAV_LINKS } from "../data";

export function LandingNav() {
  return (
    <NavWrap>
      <NavInner>
        <Brand href="#">
          <BrandMark><BrandDot /></BrandMark>
          Maverva
        </Brand>

        <NavLinks>
          {NAV_LINKS.map(({ label, href, hasDropdown }) => (
            <a key={label} href={href}>
              {label} {hasDropdown && <span className="chev">▾</span>}
            </a>
          ))}
        </NavLinks>

        <NavCta>
          <BtnGhost href="/login">Log in</BtnGhost>
          <BtnPrimary href="/register">
            Start free <span className="arr">→</span>
          </BtnPrimary>
        </NavCta>
      </NavInner>
    </NavWrap>
  );
}
