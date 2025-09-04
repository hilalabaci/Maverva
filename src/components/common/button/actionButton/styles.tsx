import styled, { css } from "styled-components";

type actionButtonPropsType = {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
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
          padding: 12px 0;
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
  outline: none;
  border-radius: 3px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  height: 40px;
  &:hover {
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
