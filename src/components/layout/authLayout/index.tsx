import React from "react";
import {
  Page,
  LeftPanel,
  LeftTop,
  LeftBrand,
  LeftBrandMark,
  LeftBrandDot,
  StatusBadge,
  StatusDot,
  Ticket,
  TicketTop,
  TicketKind,
  TicketTitle,
  TicketFoot,
  TicketPill,
  TicketAvatar,
  LeftBody,
  LeftLabel,
  LabelBar,
  Kicker,
  Lede,
  LeftFoot,
  StatKey,
  StatValue,
  RightPanel,
  RightTop,
  MobileBrand,
  MobileBrandMark,
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

const leftContent: Record<
  AuthScreen,
  { kicker: React.ReactNode; lede: string }
> = {
  login: {
    kicker: (
      <>
        The work is <em>hard enough.</em>
        <br />
        The tool shouldn&apos;t be.
      </>
    ),
    lede: "One source of truth for product, engineering and design. Plan sprints, track issues, and keep the roadmap honest — without the meeting overhead.",
  },
  register: {
    kicker: (
      <>
        Project management <em>for teams</em> who ship.
      </>
    ),
    lede: "Spin up a workspace, import from Jira or Linear, and invite your team. Start free — upgrade only when you outgrow the limits.",
  },
  reset: {
    kicker: (
      <>
        We&apos;ll <em>get you back</em> in.
      </>
    ),
    lede: "Recovery links expire after 30 minutes. For SSO-enabled workspaces, password reset is handled by your identity provider.",
  },
};

const altLinkConfig: Record<
  AuthScreen,
  { prefix: string; cta: string; href: string }
> = {
  login: { prefix: "New to Maverva?", cta: "Create an account", href: "/register" },
  register: { prefix: "Already have an account?", cta: "Log in", href: "/login" },
  reset: { prefix: "Remembered it?", cta: "Log in", href: "/login" },
};

function AuthLayout({ children, screen }: AuthLayoutProps) {
  const { kicker, lede } = leftContent[screen];
  const { prefix, cta, href } = altLinkConfig[screen];

  return (
    <Page>
      {/* ── LEFT: editorial panel ── */}
      <LeftPanel>
        <LeftTop>
          <LeftBrand href="/">
            <LeftBrandMark>
              <LeftBrandDot />
            </LeftBrandMark>
            Maverva
          </LeftBrand>
          <StatusBadge>
            <StatusDot />
            All systems operational
          </StatusBadge>
        </LeftTop>

        <Ticket>
          <TicketTop>
            <TicketKind>S</TicketKind>
            <span>MAV-407</span>
            <span style={{ marginLeft: "auto" }}>Sprint 14</span>
          </TicketTop>
          <TicketTitle>
            Dual-write subscription records to v2 store
          </TicketTitle>
          <TicketFoot>
            <TicketPill>In progress</TicketPill>
            <span>8 pts</span>
            <TicketAvatar>SW</TicketAvatar>
          </TicketFoot>
        </Ticket>

        <LeftBody>
          <LeftLabel>
            <LabelBar />
            Your workspace is ready
          </LeftLabel>
          <Kicker>{kicker}</Kicker>
          <Lede>{lede}</Lede>
        </LeftBody>

        <LeftFoot>
          <div>
            <StatKey>Teams shipping</StatKey>
            <StatValue>12,400+</StatValue>
          </div>
          <div>
            <StatKey>Uptime</StatKey>
            <StatValue>99.99%</StatValue>
          </div>
          <div>
            <StatKey>Meetings saved / wk</StatKey>
            <StatValue>41 min</StatValue>
          </div>
        </LeftFoot>
      </LeftPanel>

      {/* ── RIGHT: form panel ── */}
      <RightPanel>
        <RightTop>
          <MobileBrand href="/">
            <MobileBrandMark />
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
