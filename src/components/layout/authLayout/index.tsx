/**
 * AuthLayout Component
 * 
 * Centered authentication layout for login, register, and password reset flows
 * Provides consistent branding, navigation, and footer across all auth pages
 * 
 * Layout Features:
 * - Centered single-column design (responsive)
 * - Maverva branding in header
 * - Context-aware navigation links
 * - Security badges in footer
 * 
 * @author Maverva Team
 * @version 2.0.0 - Simplified from split-panel to centered design
 */

import React from "react";
import {
  Page,
  RightPanel,
  RightTop,
  MobileBrand,
  MobileBrandMark,
  LeftBrandDot,
  AltLink,
  FormWrap,
  FormInner,
  RightFooter,
} from "./styles";

type AuthScreen = "login" | "register" | "reset";

interface AuthLayoutProps {
  children: React.ReactNode;
  screen: AuthScreen;
}

const altLinkConfig: Record<
  AuthScreen,
  { prefix: string; cta: string; href: string }
> = {
  login: { prefix: "New to Maverva?", cta: "Create an account", href: "/register" },
  register: { prefix: "Already have an account?", cta: "Log in", href: "/login" },
  reset: { prefix: "Remembered it?", cta: "Log in", href: "/login" },
};

function AuthLayout({ children, screen }: AuthLayoutProps) {
  const { prefix, cta, href } = altLinkConfig[screen];

  return (
    <Page>
      {/* ── RIGHT: form panel ── */}
      <RightPanel>
        <RightTop>
          <MobileBrand href="/">
            <MobileBrandMark>
              <LeftBrandDot />
            </MobileBrandMark>
            Maverva
          </MobileBrand>
          <span />
          <AltLink href={href}>
            {prefix}
            <b>{cta}</b>
          </AltLink>
        </RightTop>

        <FormWrap>
          <FormInner>{children}</FormInner>
        </FormWrap>

        <RightFooter>
          <span>© 2026 Maverva B.V.</span>
          <span>
            Privacy · Terms · Status
          </span>
        </RightFooter>
      </RightPanel>
    </Page>
  );
}

export default AuthLayout;
