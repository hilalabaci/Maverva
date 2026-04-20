import styled, { createGlobalStyle } from "styled-components";

export const LandingGlobalStyles = createGlobalStyle`
  :root {
    --lp-bg: #F6F4EF;
    --lp-bg-2: #EEEBE3;
    --lp-ink: #16171B;
    --lp-ink-2: #3B3D44;
    --lp-ink-3: #74767D;
    --lp-line: #E2DED3;
    --lp-line-2: #D4CFC1;
    --lp-card: #FFFFFF;
    --lp-accent: #1E2A5E;
    --lp-accent-ink: #ffffff;
    --lp-warn: #C2410C;
    --lp-ok: #166534;
    --lp-radius: 6px;
  }
`;

/* ========== PAGE WRAPPER ========== */
export const PageWrapper = styled.div`
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  background: var(--lp-bg);
  color: var(--lp-ink);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  min-height: 100vh;
`;

/* ========== TOP STRIP ========== */
export const TopStrip = styled.div`
  background: var(--lp-ink);
  color: var(--lp-bg);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11.5px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 9px 0;
  text-align: center;

  span {
    opacity: 0.6;
    margin: 0 10px;
  }
  b {
    font-weight: 500;
  }
`;

/* ========== NAVBAR ========== */
export const NavWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--lp-bg) 88%, transparent);
  backdrop-filter: saturate(140%) blur(8px);
  border-bottom: 1px solid var(--lp-line);
`;

export const NavInner = styled.header`
  max-width: 1320px;
  margin: 0 auto;
  padding: 14px 32px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: auto auto;
    gap: 12px;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: -0.01em;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const BrandMark = styled.span`
  width: 22px;
  height: 22px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid var(--lp-ink);
    border-radius: 50%;
  }
  &::after {
    transform: rotate(45deg);
    border-color: transparent var(--lp-ink) transparent var(--lp-ink);
  }
`;

export const BrandDot = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  background: var(--lp-ink);
  border-radius: 50%;
  top: 8.5px;
  left: 8.5px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 28px;
  justify-self: center;
  font-size: 14px;
  color: var(--lp-ink-2);

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--lp-ink);
    }
  }

  .chev {
    opacity: 0.5;
    font-size: 9px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavCta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: var(--lp-radius);
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: -0.005em;
  transition: 0.15s;
  text-decoration: none;
  cursor: pointer;
  border: none;
  font-family: inherit;

  .arr {
    font-size: 11px;
    transform: translateY(-0.5px);
  }
`;

export const BtnGhost = styled(Btn)`
  color: var(--lp-ink-2);
  &:hover {
    color: var(--lp-ink);
    background: var(--lp-bg-2);
  }
`;

export const BtnPrimary = styled(Btn)`
  background: var(--lp-ink);
  color: var(--lp-bg);
  &:hover {
    background: var(--lp-accent);
  }
`;

export const BtnAccent = styled(Btn)`
  background: var(--lp-accent);
  color: var(--lp-accent-ink);
  &:hover {
    filter: brightness(1.12);
  }
`;

export const BtnOutline = styled(Btn)`
  border: 1px solid var(--lp-line-2);
  color: var(--lp-ink);
  &:hover {
    background: var(--lp-card);
    border-color: var(--lp-ink);
  }
`;

/* ========== HERO ========== */
export const HeroSection = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: 72px 32px 0;
  position: relative;
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Geist Mono', monospace;
  font-size: 11.5px;
  color: var(--lp-ink-3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 36px;
`;

export const EyebrowPill = styled.span`
  padding: 4px 10px;
  border: 1px solid var(--lp-line-2);
  border-radius: 999px;
  color: var(--lp-ink);
  background: var(--lp-card);
  text-transform: none;
  letter-spacing: 0.02em;
  font-size: 11px;

  b {
    color: var(--lp-accent);
    font-weight: 600;
    margin-right: 4px;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 64px;
  align-items: end;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--lp-line);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

export const Headline = styled.h1`
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(52px, 8.2vw, 128px);
  line-height: 0.96;
  letter-spacing: -0.02em;
  margin: 0 0 28px;
  max-width: 12ch;

  em {
    font-style: italic;
    color: var(--lp-accent);
  }

  .slash {
    display: inline-block;
    color: var(--lp-ink-3);
    font-style: normal;
    padding: 0 0.1em;
  }
`;

export const Lede = styled.p`
  max-width: 46ch;
  font-size: 19px;
  line-height: 1.5;
  color: var(--lp-ink-2);
  margin: 0 0 40px;
  letter-spacing: -0.005em;
`;

export const HeroCtas = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;

  .meta {
    margin-left: 6px;
    color: var(--lp-ink-3);
    font-size: 13px;

    b {
      color: var(--lp-ink);
      font-weight: 500;
    }
  }
`;

export const StatCol = styled.aside`
  padding-bottom: 6px;
`;

export const StatItem = styled.div`
  border-top: 1px solid var(--lp-line);
  padding: 16px 0 0;
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;

  &:first-of-type {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }
`;

export const StatNum = styled.span`
  font-family: 'Instrument Serif', serif;
  font-size: 38px;
  line-height: 1;
  letter-spacing: -0.02em;

  span {
    color: var(--lp-ink-3);
  }
`;

export const StatLbl = styled.span`
  font-size: 12.5px;
  color: var(--lp-ink-3);
  max-width: 18ch;
  text-align: right;
`;

/* ========== PRODUCT WRAP ========== */
export const ProductWrap = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: 56px 32px 40px;
`;

export const ProductFrame = styled.div`
  background: var(--lp-card);
  border: 1px solid var(--lp-line);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02), 0 40px 80px -40px rgba(20, 25, 60, 0.18);
  position: relative;
`;

export const PfChrome = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid var(--lp-line);
  background: linear-gradient(180deg, color-mix(in srgb, var(--lp-bg-2) 70%, var(--lp-card)) 0%, var(--lp-card) 100%);

  .dots {
    display: flex;
    gap: 6px;
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--lp-line-2);
      display: inline-block;
    }
  }

  .url {
    justify-self: center;
    font-family: 'Geist Mono', monospace;
    font-size: 11.5px;
    color: var(--lp-ink-3);
    background: var(--lp-bg);
    border: 1px solid var(--lp-line);
    padding: 4px 14px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border: 1.2px solid var(--lp-ink-3);
      border-radius: 50%;
      border-top-color: transparent;
      transform: rotate(45deg);
      flex-shrink: 0;
    }
  }

  .ctrls {
    display: flex;
    gap: 4px;
    color: var(--lp-ink-3);
    font-size: 14px;
    span {
      padding: 2px 6px;
    }
  }
`;

export const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: 520px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AppSidebar = styled.aside`
  background: var(--lp-bg);
  border-right: 1px solid var(--lp-line);
  padding: 18px 14px;
  font-size: 13px;

  .sbrand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    padding: 4px 8px 18px;
    font-size: 14px;

    .m {
      width: 16px;
      height: 16px;
      border: 1.5px solid var(--lp-ink);
      border-radius: 50%;
      position: relative;
      flex-shrink: 0;

      &::after {
        content: "";
        position: absolute;
        inset: -1.5px;
        border-radius: 50%;
        border: 1.5px solid transparent;
        border-top-color: var(--lp-ink);
        border-left-color: var(--lp-ink);
        transform: rotate(45deg);
      }
    }
  }

  h6 {
    text-transform: uppercase;
    font-size: 10.5px;
    letter-spacing: 0.1em;
    color: var(--lp-ink-3);
    margin: 14px 8px 8px;
    font-weight: 500;
    font-family: 'Geist Mono', monospace;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 8px;
    border-radius: 5px;
    color: var(--lp-ink-2);
    cursor: pointer;

    &:hover {
      background: var(--lp-bg-2);
    }

    &.active {
      background: color-mix(in srgb, var(--lp-accent) 10%, transparent);
      color: var(--lp-accent);
      font-weight: 500;
    }

    .ico {
      width: 14px;
      height: 14px;
      border: 1.2px solid currentColor;
      border-radius: 3px;
      opacity: 0.8;
      flex-shrink: 0;
    }

    &.active .ico {
      background: currentColor;
    }

    .cnt {
      margin-left: auto;
      font-family: 'Geist Mono', monospace;
      font-size: 11px;
      opacity: 0.6;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MainCol = styled.div`
  padding: 22px 26px;
  overflow: hidden;

  .crumb {
    font-size: 12px;
    color: var(--lp-ink-3);
    margin-bottom: 14px;
    b { color: var(--lp-ink-2); font-weight: 500; }
  }

  .mhead {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 18px;
    gap: 20px;

    h3 {
      font-family: 'Instrument Serif', serif;
      font-weight: 400;
      font-size: 34px;
      line-height: 1;
      letter-spacing: -0.02em;
      margin: 0;
    }

    .meta {
      font-size: 12px;
      color: var(--lp-ink-3);
      font-family: 'Geist Mono', monospace;
      margin-top: 6px;
    }

    .actions {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
    }
  }

  .tabs {
    display: flex;
    gap: 2px;
    border-bottom: 1px solid var(--lp-line);
    margin-bottom: 14px;

    span {
      padding: 8px 12px;
      font-size: 13px;
      color: var(--lp-ink-3);
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
      cursor: pointer;

      &.on {
        color: var(--lp-ink);
        border-bottom-color: var(--lp-accent);
        font-weight: 500;
      }
    }
  }
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BoardCol = styled.div`
  background: var(--lp-bg);
  border: 1px solid var(--lp-line);
  border-radius: 6px;
  padding: 10px;
  min-height: 320px;

  h5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--lp-ink-3);
    margin: 0 0 10px;
    font-family: 'Geist Mono', monospace;
    font-weight: 500;

    .c {
      background: var(--lp-card);
      border: 1px solid var(--lp-line);
      padding: 1px 7px;
      border-radius: 10px;
      color: var(--lp-ink-2);
      text-transform: none;
    }
  }
`;

export const BoardCard = styled.div<{ $faded?: boolean }>`
  background: var(--lp-card);
  border: 1px solid var(--lp-line);
  border-radius: 5px;
  padding: 10px 11px;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.35;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
  opacity: ${({ $faded }) => ($faded ? 0.7 : 1)};

  .tag {
    font-family: 'Geist Mono', monospace;
    font-size: 10.5px;
    color: var(--lp-ink-3);
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .av {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--lp-accent);
    color: #fff;
    font-size: 9.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    &.a2 { background: #0F766E; }
    &.a3 { background: #9F1239; }
    &.a4 { background: #713F12; }
  }

  .pri {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--lp-warn);
    margin-right: 6px;
    vertical-align: middle;

    &.ok { background: var(--lp-ok); }
    &.med { background: #B45309; }
  }
`;

export const SmallBtn = styled.a<{ $variant?: "outline" | "accent" }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: var(--lp-radius);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.005em;
  transition: 0.15s;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;

  ${({ $variant }) =>
    $variant === "outline" &&
    `
      border: 1px solid var(--lp-line-2);
      color: var(--lp-ink);
      &:hover { background: var(--lp-card); border-color: var(--lp-ink); }
    `}

  ${({ $variant }) =>
    $variant === "accent" &&
    `
      background: var(--lp-accent);
      color: var(--lp-accent-ink);
      &:hover { filter: brightness(1.12); }
    `}
`;

/** Monospace small text — replaces repeated inline style={{fontFamily:...}} */
export const MonoText = styled.span`
  font-family: 'Geist Mono', monospace;
  font-size: 11px;
  color: var(--lp-ink-3);
`;

/** Pushes tbar right-side content to the edge */
export const TbarRight = styled.span`
  margin-left: auto;
`;

/* ========== LOGOS ========== */
export const LogosSection = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: 32px 32px 90px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 56px;
  border-bottom: 1px solid var(--lp-line);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const LogosLead = styled.div`
  font-family: 'Geist Mono', monospace;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--lp-ink-3);
  max-width: 16ch;
  line-height: 1.5;
`;

export const LogosRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 36px;
  align-items: center;
  flex-wrap: wrap;
`;

export const LogoItem = styled.div<{ $variant?: 's' | 'm' }>`
  font-family: ${({ $variant }) =>
    $variant === 's'
      ? "'Geist', sans-serif"
      : $variant === 'm'
      ? "'Geist Mono', monospace"
      : "'Instrument Serif', serif"};
  font-size: ${({ $variant }) => ($variant === 's' ? '16px' : $variant === 'm' ? '14px' : '26px')};
  font-weight: ${({ $variant }) => ($variant === 's' ? '700' : $variant === 'm' ? '500' : '400')};
  letter-spacing: ${({ $variant }) => ($variant === 's' ? '-0.02em' : '-0.01em')};
  text-transform: ${({ $variant }) => ($variant === 's' ? 'uppercase' : 'none')};
  color: var(--lp-ink-2);
  opacity: 0.85;
`;

/* ========== FEATURES ========== */
export const FeaturesSection = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: 96px 32px;
`;

export const SecHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 64px;
  margin-bottom: 64px;
  align-items: end;
  padding-bottom: 36px;
  border-bottom: 1px solid var(--lp-line);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const SecIdx = styled.div`
  font-family: 'Geist Mono', monospace;
  font-size: 11.5px;
  color: var(--lp-ink-3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`;

export const SecH2 = styled.h2`
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(40px, 5.6vw, 82px);
  line-height: 0.98;
  letter-spacing: -0.02em;
  margin: 0;

  em {
    font-style: italic;
    color: var(--lp-accent);
  }
`;

export const SecP = styled.p`
  max-width: 44ch;
  color: var(--lp-ink-2);
  font-size: 16px;
  margin: 0;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--lp-line);
  border: 1px solid var(--lp-line);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatCard = styled.div`
  background: var(--lp-bg);
  padding: 32px 28px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  position: relative;

  .n {
    font-family: 'Geist Mono', monospace;
    font-size: 11px;
    color: var(--lp-ink-3);
    letter-spacing: 0.1em;
  }

  h3 {
    font-family: 'Instrument Serif', serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.05;
    letter-spacing: -0.015em;
    margin: 52px 0 12px;
    max-width: 13ch;
  }

  p {
    color: var(--lp-ink-2);
    font-size: 14.5px;
    margin: 0;
    max-width: 32ch;
  }

  .viz {
    margin-top: auto;
    padding-top: 28px;
  }

  .link {
    margin-top: 16px;
    font-size: 13px;
    color: var(--lp-accent);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const VPlan = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 10px;
  font-size: 11.5px;
  font-family: 'Geist Mono', monospace;

  .lbl { color: var(--lp-ink-3); }

  .bar {
    height: 14px;
    background: var(--lp-card);
    border: 1px solid var(--lp-line);
    border-radius: 3px;
    position: relative;
    overflow: hidden;

    i {
      position: absolute;
      top: 0;
      bottom: 0;
      background: var(--lp-accent);
      border-radius: 2px;
      display: block;
    }

    &.b2 i { background: #0F766E; }
    &.b3 i { background: #B45309; }
    &.b4 i { background: var(--lp-ink); }
  }
`;

export const VDoc = styled.div`
  background: var(--lp-card);
  border: 1px solid var(--lp-line);
  border-radius: 5px;
  padding: 14px;
  font-size: 12px;
  line-height: 1.5;

  h6 {
    margin: 0 0 6px;
    font-family: 'Instrument Serif', serif;
    font-weight: 400;
    font-size: 17px;
  }

  .ln {
    height: 5px;
    background: var(--lp-bg-2);
    border-radius: 2px;
    margin-bottom: 6px;

    &.s { width: 70%; }
  }

  .cite {
    border-left: 2px solid var(--lp-accent);
    padding-left: 8px;
    color: var(--lp-ink-3);
    font-size: 11px;
    margin-top: 8px;
  }
`;

export const VAuto = styled.div`
  font-family: 'Geist Mono', monospace;
  font-size: 11.5px;

  .row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    background: var(--lp-card);
    border: 1px solid var(--lp-line);
    border-radius: 4px;
    margin-bottom: 6px;

    .sq {
      width: 8px;
      height: 8px;
      background: var(--lp-accent);
      border-radius: 1px;
      flex-shrink: 0;
    }

    &.t .sq { background: #B45309; border-radius: 50%; }
    &.x .sq { background: var(--lp-ok); }
  }

  .arr {
    text-align: center;
    color: var(--lp-ink-3);
    font-size: 10px;
    margin: -2px 0 4px;
  }
`;

/* ========== DARK BAND ========== */
export const BandSection = styled.section`
  background: var(--lp-ink);
  color: var(--lp-bg);
  padding: 110px 0 100px;
  position: relative;
  overflow: hidden;
`;

export const BandInner = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const BandIdx = styled.div`
  font-family: 'Geist Mono', monospace;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 18px;
`;

export const BandH2 = styled.h2`
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: clamp(44px, 6vw, 84px);
  line-height: 0.98;
  letter-spacing: -0.02em;
  margin: 0 0 24px;

  em {
    font-style: italic;
    color: color-mix(in srgb, var(--lp-accent) 60%, white);
  }
`;

export const BandP = styled.p`
  color: color-mix(in srgb, var(--lp-bg) 72%, transparent);
  font-size: 17px;
  max-width: 44ch;
  margin: 0 0 36px;
`;

export const BandKv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);

  > div {
    padding: 18px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);

    .k {
      font-family: 'Geist Mono', monospace;
      font-size: 11px;
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 6px;
    }

    .v {
      font-family: 'Instrument Serif', serif;
      font-size: 26px;
    }
  }
`;

export const AppMini = styled.div`
  background: var(--lp-card);
  color: var(--lp-ink);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06);

  .tbar {
    padding: 12px 16px;
    border-bottom: 1px solid var(--lp-line);
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: 'Geist Mono', monospace;
    font-size: 11px;
    color: var(--lp-ink-3);

    b {
      color: var(--lp-ink);
      font-weight: 500;
      font-family: 'Geist', sans-serif;
    }

    .tbar-dots {
      display: flex;
      gap: 5px;
    }

    .tbar-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--lp-line-2);
      display: inline-block;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12.5px;
  }

  th, td {
    text-align: left;
    padding: 9px 16px;
    border-bottom: 1px solid var(--lp-line);
    vertical-align: middle;
  }

  th {
    font-weight: 500;
    color: var(--lp-ink-3);
    font-family: 'Geist Mono', monospace;
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: var(--lp-bg);
  }

  tr:last-child td {
    border-bottom: 0;
  }
`;

export const ProgressBar = styled.div<{ $pct: number; $color?: string }>`
  height: 6px;
  background: var(--lp-bg);
  border-radius: 3px;
  position: relative;
  display: inline-block;
  width: 80px;
  margin-right: 8px;
  vertical-align: middle;

  &::after {
    content: '';
    position: absolute;
    inset: 0 ${({ $pct }) => 100 - $pct}% 0 0;
    background: ${({ $color }) => $color || 'var(--lp-accent)'};
    border-radius: 3px;
  }
`;

export const PillStatus = styled.span<{ $variant: 'todo' | 'prog' | 'done' | 'rev' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  border-radius: 3px;
  font-family: 'Geist Mono', monospace;
  font-size: 10.5px;
  font-weight: 500;
  background: ${({ $variant }) =>
    $variant === 'todo'
      ? '#F3F4F6'
      : $variant === 'prog'
      ? '#DBEAFE'
      : $variant === 'done'
      ? '#D1FAE5'
      : '#FEF3C7'};
  color: ${({ $variant }) =>
    $variant === 'todo'
      ? '#374151'
      : $variant === 'prog'
      ? '#1E40AF'
      : $variant === 'done'
      ? '#065F46'
      : '#92400E'};

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    background: currentColor;
    border-radius: 50%;
  }
`;

export const Avatar = styled.span<{ $color?: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $color }) => $color || 'var(--lp-accent)'};
  color: #fff;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-right: 7px;
  vertical-align: middle;
`;

/* ========== QUOTE ========== */
export const QuoteSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 110px 32px;
  border-bottom: 1px solid var(--lp-line);

  .lbl {
    font-family: 'Geist Mono', monospace;
    font-size: 11px;
    color: var(--lp-ink-3);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 20px;
  }
`;

export const Blockquote = styled.blockquote`
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-style: italic;
  font-size: clamp(30px, 3.6vw, 54px);
  line-height: 1.15;
  letter-spacing: -0.015em;
  margin: 0 0 28px;

  &::before {
    content: "\u201C";
    font-size: 1em;
    color: var(--lp-accent);
    margin-right: 0.1em;
  }
  &::after {
    content: "\u201D";
    font-size: 1em;
    color: var(--lp-accent);
  }
`;

export const QuoteCite = styled.cite`
  display: flex;
  align-items: center;
  gap: 14px;
  font-style: normal;
  font-size: 14px;
  color: var(--lp-ink-2);

  .av {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--lp-accent);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 13px;
    flex-shrink: 0;
  }

  b { color: var(--lp-ink); font-weight: 500; }

  span {
    color: var(--lp-ink-3);
    font-size: 12.5px;
  }
`;

/* ========== PRICING ========== */
export const PricingSection = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: 96px 32px;
`;

export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--lp-line);
  border: 1px solid var(--lp-line);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const PlanCard = styled.div<{ $featured?: boolean }>`
  background: ${({ $featured }) => ($featured ? 'var(--lp-ink)' : 'var(--lp-bg)')};
  color: ${({ $featured }) => ($featured ? 'var(--lp-bg)' : 'inherit')};
  padding: 34px 30px;
  display: flex;
  flex-direction: column;
  position: relative;

  .pn {
    font-family: 'Geist Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ $featured }) => ($featured ? 'rgba(255,255,255,0.7)' : 'var(--lp-ink-3)')};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    font-family: 'Instrument Serif', serif;
    font-weight: 400;
    font-size: 34px;
    margin: 10px 0 8px;
    letter-spacing: -0.015em;
  }

  .sub {
    color: ${({ $featured }) => ($featured ? 'rgba(255,255,255,0.7)' : 'var(--lp-ink-2)')};
    font-size: 14px;
    margin-bottom: 24px;
    min-height: 44px;
  }

  .price {
    font-family: 'Instrument Serif', serif;
    font-size: 56px;
    line-height: 1;
    letter-spacing: -0.02em;

    small {
      font-family: 'Geist', sans-serif;
      font-size: 13px;
      color: ${({ $featured }) => ($featured ? 'rgba(255,255,255,0.6)' : 'var(--lp-ink-3)')};
      margin-left: 4px;
    }
  }

  ul {
    list-style: none;
    padding: 22px 0 0;
    margin: 20px 0 28px;
    border-top: 1px solid ${({ $featured }) => ($featured ? 'rgba(255,255,255,0.15)' : 'var(--lp-line)')};
    font-size: 13.5px;
    color: ${({ $featured }) => ($featured ? 'rgba(255,255,255,0.7)' : 'var(--lp-ink-2)')};
    flex: 1;

    li {
      padding: 7px 0;
      display: flex;
      gap: 10px;
      align-items: flex-start;

      &::before {
        content: "+";
        color: ${({ $featured }) => ($featured ? 'rgba(255,255,255,0.5)' : 'var(--lp-ink-3)')};
        font-family: 'Geist Mono', monospace;
        margin-top: -1px;
      }
    }
  }
`;

export const PopularBadge = styled.span`
  background: var(--lp-accent);
  color: #fff;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 10px;
`;

/** Full-width centred plan CTA buttons — extends base variants */
export const PlanBtnAccent = styled(BtnAccent)`
  justify-content: center;
`;
export const PlanBtnOutline = styled(BtnOutline)`
  justify-content: center;
`;

/** Larger CTA section buttons */
export const CtaBtnAccent = styled(BtnAccent)`
  padding: 14px 20px;
  font-size: 14.5px;
`;
export const CtaBtnOutline = styled(BtnOutline)`
  padding: 14px 20px;
  font-size: 14.5px;
`;

/* ========== CTA ========== */
export const CtaSection = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: 120px 32px;
  text-align: center;
  border-top: 1px solid var(--lp-line);

  .eyebrow-cta {
    font-family: 'Geist Mono', monospace;
    font-size: 11px;
    color: var(--lp-ink-3);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 26px;
  }

  h2 {
    font-family: 'Instrument Serif', serif;
    font-weight: 400;
    font-size: clamp(56px, 9vw, 148px);
    line-height: 0.92;
    letter-spacing: -0.025em;
    margin: 0 0 28px;

    em {
      font-style: italic;
      color: var(--lp-accent);
    }
  }

  p {
    color: var(--lp-ink-2);
    max-width: 46ch;
    margin: 0 auto 34px;
    font-size: 17px;
  }

  .act {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
`;

/* ========== FOOTER ========== */
export const FooterEl = styled.footer`
  border-top: 1px solid var(--lp-line);
  background: var(--lp-bg-2);
  color: var(--lp-ink-2);
  font-size: 13px;
`;

export const FootGrid = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 60px 32px 28px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  h6 {
    font-family: 'Geist Mono', monospace;
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--lp-ink-3);
    margin: 0 0 14px;
    font-weight: 500;
  }

  a {
    display: block;
    padding: 5px 0;
    color: var(--lp-ink-2);
    text-decoration: none;
    cursor: pointer;

    &:hover { color: var(--lp-ink); }
  }

  .about p {
    max-width: 34ch;
    margin: 14px 0 0;
  }
`;

export const FootBase = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 24px 32px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--lp-line);
  font-family: 'Geist Mono', monospace;
  font-size: 11px;
  color: var(--lp-ink-3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  flex-wrap: wrap;
  gap: 16px;
`;
