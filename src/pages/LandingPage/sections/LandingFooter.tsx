import {
  FooterEl, FootGrid, FootBase, Brand, BrandMark, BrandDot,
} from "../landing-styled";
import { FOOTER_COLS } from "../data";

export function LandingFooter() {
  return (
    <FooterEl>
      <FootGrid>
        <div className="about">
          <Brand href="#">
            <BrandMark><BrandDot /></BrandMark>
            Maverva
          </Brand>
          <p>
            Manage all your projects in one place. Built in Amsterdam &amp;
            Brooklyn since 2022.
          </p>
        </div>

        {FOOTER_COLS.map(({ heading, links }) => (
          <div key={heading}>
            <h6>{heading}</h6>
            {links.map((link) => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>
        ))}
      </FootGrid>

      <FootBase>
        <span>© 2026 Maverva B.V. — All rights reserved</span>
        <span>Terms · Privacy · DPA · Cookies</span>
        <span>🌐 English (US)</span>
      </FootBase>
    </FooterEl>
  );
}
