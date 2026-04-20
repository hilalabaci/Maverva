import styled from "styled-components";

/* ─────────────────────────────────────────────
   PAGE SHELL
───────────────────────────────────────────── */
export const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ─────────────────────────────────────────────
   LEFT — EDITORIAL PANEL
───────────────────────────────────────────── */
export const LeftPanel = styled.div`
  background: #16171b;
  color: #f6f4ef;
  padding: 44px 56px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-right: 1px solid #e2ded3;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(
        to right,
        rgba(246, 244, 239, 0.04) 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        rgba(246, 244, 239, 0.04) 1px,
        transparent 1px
      );
    background-size: 64px 64px;
    mask-image: radial-gradient(
      ellipse at 30% 50%,
      black 30%,
      transparent 80%
    );
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LeftTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 2;
`;

export const LeftBrand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: -0.01em;
  color: #f6f4ef;
  text-decoration: none;
`;

export const LeftBrandMark = styled.span`
  width: 22px;
  height: 22px;
  position: relative;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid #f6f4ef;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid transparent;
    border-top-color: #f6f4ef;
    border-left-color: #f6f4ef;
    border-radius: 50%;
    transform: rotate(45deg);
  }
`;

export const LeftBrandDot = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  background: #f6f4ef;
  border-radius: 50%;
  top: 8.5px;
  left: 8.5px;
`;

export const StatusBadge = styled.span`
  font-family: "Geist Mono", monospace;
  font-size: 11px;
  color: rgba(246, 244, 239, 0.7);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border: 1px solid rgba(246, 244, 239, 0.15);
  border-radius: 999px;
`;

export const StatusDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34d399;
  flex-shrink: 0;
`;

/* decorative ticket */
export const Ticket = styled.div`
  position: absolute;
  right: -30px;
  top: 20%;
  width: 340px;
  transform: rotate(4deg);
  background: #ffffff;
  color: #16171b;
  border: 1px solid rgba(246, 244, 239, 0.14);
  border-radius: 8px;
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55);
  padding: 16px 18px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TicketTop = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Geist Mono", monospace;
  font-size: 10.5px;
  color: #74767d;
`;

export const TicketKind = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: #15803d;
  color: #fff;
  font-size: 9px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const TicketTitle = styled.div`
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.005em;
  color: #16171b;
`;

export const TicketFoot = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Geist Mono", monospace;
  font-size: 10.5px;
  color: #74767d;
`;

export const TicketPill = styled.span`
  background: rgba(30, 42, 94, 0.08);
  color: #1e2a5e;
  padding: 2px 8px;
  border-radius: 3px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 9.5px;
`;

export const TicketAvatar = styled.span`
  margin-left: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1e2a5e;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* left body */
export const LeftBody = styled.div`
  margin-top: auto;
  position: relative;
  z-index: 2;
  max-width: 520px;
`;

export const LeftLabel = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 11px;
  color: rgba(246, 244, 239, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 22px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const LabelBar = styled.span`
  display: inline-block;
  width: 26px;
  height: 1px;
  background: currentColor;
`;

export const Kicker = styled.h2`
  font-family: "Instrument Serif", serif;
  font-size: 72px;
  line-height: 0.98;
  letter-spacing: -0.022em;
  margin: 0 0 22px;
  font-weight: 400;
  color: #f6f4ef;

  em {
    font-style: italic;
    color: rgba(140, 170, 230, 0.9);
  }
`;

export const Lede = styled.p`
  color: rgba(246, 244, 239, 0.72);
  max-width: 42ch;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;

export const LeftFoot = styled.div`
  margin-top: 44px;
  padding-top: 24px;
  border-top: 1px solid rgba(246, 244, 239, 0.12);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  position: relative;
  z-index: 2;
`;

export const StatKey = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 10.5px;
  color: rgba(246, 244, 239, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
`;

export const StatValue = styled.div`
  font-family: "Instrument Serif", serif;
  font-size: 22px;
  letter-spacing: -0.01em;
  color: #f6f4ef;
`;

/* ─────────────────────────────────────────────
   RIGHT — FORM PANEL
───────────────────────────────────────────── */
export const RightPanel = styled.div`
  background: #f6f4ef;
  display: flex;
  flex-direction: column;
  padding: 28px 32px 40px;

  @media (max-width: 900px) {
    padding: 22px 20px 30px;
  }
`;

export const RightTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #74767d;
`;

export const MobileBrand = styled.a`
  display: none;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #16171b;
  text-decoration: none;

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const MobileBrandMark = styled.span`
  width: 20px;
  height: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid #16171b;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid transparent;
    border-top-color: #16171b;
    border-left-color: #16171b;
    border-radius: 50%;
    transform: rotate(45deg);
  }
`;

export const AltLink = styled.a`
  color: #3b3d44;
  text-decoration: none;

  b {
    color: #16171b;
    font-weight: 500;
    margin-left: 4px;
  }

  &:hover b {
    color: #1e2a5e;
  }
`;

export const FormWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const FormInner = styled.div`
  width: 100%;
  max-width: 420px;
`;

export const RightFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Geist Mono", monospace;
  font-size: 10.5px;
  color: #74767d;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #16171b;
    }
  }
`;

/* ─────────────────────────────────────────────
   SHARED FORM ATOMS (re-exported for page use)
───────────────────────────────────────────── */
export const StepLabel = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 11px;
  color: #74767d;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 24px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const StepBar = styled.span`
  display: inline-block;
  width: 20px;
  height: 1px;
  background: #74767d;
`;

export const FormHeading = styled.h1`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: 56px;
  line-height: 0.98;
  letter-spacing: -0.022em;
  margin: 0 0 14px;
  color: #16171b;

  em {
    font-style: italic;
    color: #1e2a5e;
  }

  @media (max-width: 900px) {
    font-size: 42px;
  }
`;

export const FormSub = styled.p`
  color: #3b3d44;
  font-size: 15px;
  margin: 0 0 32px;
  max-width: 38ch;
  line-height: 1.5;
`;

export const AuthDivider = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 14px;
  align-items: center;
  margin: 22px 0;
  font-family: "Geist Mono", monospace;
  font-size: 11px;
  color: #74767d;
  text-transform: uppercase;
  letter-spacing: 0.12em;

  &::before,
  &::after {
    content: "";
    height: 1px;
    background: #e2ded3;
  }
`;

export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const SocialButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 14px;
  height: 46px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  background: #ffffff;
  color: #16171b;
  border: 1px solid #d4cfc1;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.15s;

  &:hover {
    border-color: #16171b;
  }

  .ic {
    font-family: "Geist Mono", monospace;
    font-size: 13px;
    width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
`;

export const FormFoot = styled.div`
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #e2ded3;
  font-size: 13px;
  color: #74767d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  a {
    color: #16171b;
    text-decoration: none;

    &:hover {
      color: #1e2a5e;
    }
  }
`;

export const SecBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: "Geist Mono", monospace;
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #74767d;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #166534;
    flex-shrink: 0;
  }
`;
