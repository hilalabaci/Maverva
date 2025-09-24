import styled, { css } from "styled-components";
import { device } from "../../../../styles/breakpoints";

type actionButtonPropsType = {
  variant?: "primary" | "secondary" | "danger" | "warning";
  size?: "sm" | "md" | "lg";
  fontSize?: "sm" | "md" | "lg";
  borderRadius?: keyof typeof import("../../../../theme/tokens/borderRadius").default;
};

export const BaseButton = styled.button<actionButtonPropsType>`
  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          padding: 8px 12px;
          font-size: 14px;
        `;
      case "lg":
        return css`
          padding: 15px 0;
          font-size: 18px;
          width: 100%;
        `;
      default:
        return css`
          padding: 8px 16px;
          font-size: 16px;
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
          background: #fca700;
          color: #172b4d;
          &:hover {
            background-color: #ff8b00;
          }
          @media ${device.mobile} {
            &:active {
              background-color: #ff8b00;
            }
            &:focus {
              background-color: #ff8b00;
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
  height: 40px;
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
