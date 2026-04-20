import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";
import borderRadius from "../../../../theme/tokens/borderRadius";
// path alias

type GoogleButtonProps = {
  $borderRadius?: keyof typeof borderRadius;
};
export const GoogleSignWrapper = styled.div``;
export const Button = styled.button<GoogleButtonProps>`
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
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: #16171b;
  }
`;
export const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #16171b;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
