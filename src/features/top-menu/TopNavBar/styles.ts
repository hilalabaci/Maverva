import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../styles/breakpoints";

const navItemBase = css`
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  border-bottom: 1px solid var(--app-line);
  margin: 22px 34px 0;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${device.mobile} {
    margin: 14px 18px 0;
  }
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  ${navItemBase}
  font-size: 13.5px;
  font-weight: ${(props) => (props.$active ? "500" : "400")};
  color: ${(props) => (props.$active ? "var(--app-ink)" : "var(--app-ink-3)")};
  text-decoration: none;
  border-bottom: 2px solid
    ${(props) => (props.$active ? "var(--app-accent)" : "transparent")};
  margin-bottom: -1px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover {
    color: var(--app-ink);
  }
`;

export const NavCount = styled.span`
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10.5px;
  color: var(--app-ink-3);
  background: var(--app-bg-2);
  padding: 1px 6px;
  border-radius: 3px;
  margin-left: 8px;
`;

export const NavDisabled = styled.span`
  ${navItemBase}
  font-size: 13.5px;
  color: var(--app-ink-4);
  cursor: not-allowed;
  opacity: 0.55;
`;
