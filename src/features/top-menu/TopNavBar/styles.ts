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
  border-bottom: 2px solid
    ${(props) => props.theme.colour?.border?.default || "#e2e8f0"};
  margin-right: 40px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${device.mobile} {
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  ${navItemBase}
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  color: ${(props) =>
    props.$active
      ? props.theme.memberMenuFontColor
      : props.theme.colour?.text?.subtitle || "#44546f"};
  text-decoration: none;
  border-bottom: 2px solid
    ${(props) =>
      props.$active ? props.theme.memberMenuFontColor : "transparent"};
  margin-bottom: -2px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
  &:hover {
    color: ${(props) => props.theme.memberMenuFontColor};
    background-color: ${(props) =>
      props.theme.colour?.icon?.background?.hover || "#f1f5f9"};
    border-radius: 3px 3px 0 0;
  }
`;

export const NavDisabled = styled.span`
  ${navItemBase}
  color: ${(props) => props.theme.colour?.text?.subtitle || "#44546f"};
  cursor: not-allowed;
  opacity: 0.55;
`;
