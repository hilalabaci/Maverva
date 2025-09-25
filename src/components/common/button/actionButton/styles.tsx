import styled, { css } from "styled-components";
import { device } from "../../../../styles/breakpoints";
import borderRadius from "../../../../theme/tokens/borderRadius";

type actionButtonPropsType = {
  variant?: "primary" | "secondary" | "danger" | "warning";
  size?: "sm" | "md" | "lg";
  fontSize?: "sm" | "md" | "lg";
  borderRadius?: keyof typeof borderRadius;
};

export const BaseButton = styled.button<actionButtonPropsType>`
  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          padding: 10px 80px;
          font-size: 14px;
          height: 40px;
          width: fit-content;
        `;
      case "lg":
        return css`
          padding: 12px 0;
          font-size: 18px;
          width: 100%;
        `;
      default:
        return css`
          padding: 10px 80px;
          font-size: 14px;
          height: 40px;
          width: fit-content;
        `;
    }
  }}
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case "sm":
        return "12px";
      case "md":
        return "16px";
      case "lg":
        return "20px";
      default:
        return "14px";
    }
  }};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? theme.borderRadius[borderRadius] : theme.borderRadius.sm};

  ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return css`
          background: ${theme.colour.primary.button.secondary.background
            .default};
          color: ${theme.colour.primary.button.secondary.text.default};
          &:hover {
            background: ${theme.colour.primary.button.secondary.background
              .hover};
          }
        `;
      case "danger":
        return css`
          background: #e53935;
          color: white;
        `;
      case "warning":
        return css`
          background: ${theme.colour.primary.button.warning.background.default};
          color: ${theme.colour.primary.button.warning.text.default};
          &:hover {
            background: ${theme.colour.primary.button.warning.background.hover};
          }
          @media ${device.mobile} {
            &:active {
              background: ${theme.colour.primary.button.warning.background
                .hover};
            }
            &:focus {
              background: ${theme.colour.primary.button.warning.background
                .hover};
            }
          }
        `;
      default:
        return css`
          background: ${theme.colour.primary.button.primary.background.default};
          color: ${theme.colour.primary.button.primary.text.default};
          &:hover {
            background: ${theme.colour.primary.button.primary.background.hover};
          }
        `;
    }
  }}
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  font-weight: 550;
  cursor: pointer;
  @media ${device.mobile} {
    &:active {
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }

  @media ${device.desktop} {
  }
`;
