import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";
import borderRadius from "../../../../theme/tokens/borderRadius";
// path alias

type GoogleButtonProps = {
  borderRadius?: keyof typeof borderRadius;
};
export const GoogleSignWrapper = styled.div``;
export const Button = styled.button<GoogleButtonProps>`
  border-radius: 3px;
font-size: ${(props) => props.theme.fontSize.default};
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
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};

  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? theme.borderRadius[borderRadius] : theme.borderRadius.lg};
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
`;
export const Text = styled.span`
  font-weight: 550;
  color: ${(props) => props.theme.colour.text.inverted};
  font-size: ${(props) => props.theme.fontSize.default};
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.default};
  }
`;
