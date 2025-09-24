import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";

type GoogleButtonProps = {
  borderRadius?: keyof typeof import("../../../../theme/tokens/borderRadius").default;
};
export const GoogleSignWrapper = styled.div``;
export const Button = styled.button<GoogleButtonProps>`
  border-radius: 3px;
  font-size: 1.1rem;
  color: #172b4d;
  background-color: #ffffff;
  padding-left: 0.75rem;
  padding-bottom: 0.5rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  gap: 0.5rem;
  box-shadow: 0 1px 1px 0 #091e4240, 0 0 1px 0 #091e424f;
  height: 40px;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  width: 100%;
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? theme.borderRadius[borderRadius] : theme.borderRadius.sm};
`;
export const Text = styled.span`
  font-weight: 600;
  color: #2f4156;
  font-size: 14px;
 @media ${device.mobile} {
    font-size: 14px;
  }
`;
