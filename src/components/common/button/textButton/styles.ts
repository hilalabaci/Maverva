import styled from "styled-components";

type displayBorder = {
  boxShadow?: boolean;
  size?: "small" | "medium" | "large";
};

export const Container = styled.button<displayBorder>`
  display: flex;
  justify-self: center;
  align-self: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 0 10px;
  border-radius: 3px;
  height: 2.28571em;
  color: ${(props) => props.theme.colour.iconButton.default.icon};
  border: ${(props) => props.theme.colour.iconButton.default.border};
  box-shadow: ${(props) =>
    props.boxShadow
      ? `${props.theme.colour.iconButton.default.boxShadow}`
      : "none"};
  transition: box-shadow 0.2s ease;
  background-color: ${(props) =>
    props.theme.colour.iconButton.default.background};
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.iconButton.hover.background};
    box-shadow: ${(props) =>
      props.boxShadow
        ? ` 0 2px 4px rgba(0, 0, 0, 0.1), /* hafif gölge */
    0 8px 16px rgba(0, 0, 0, 0.08);`
        : "none"};
  }
`;
// export const CompleteSprintButton = styled.button`
//   color: ${(props) => props.theme.colour.text.inverted};
//   background-color: ${(props) =>
//     props.theme.colour.primary.button.secondary.background.default};
//   outline: none;
//   border: none;
//   border-radius: 3px;
//
//   font-weight: 590;
//
//   cursor: pointer;
//   &:hover {
//     background-color: ${(props) =>
//       props.theme.colour.primary.button.secondary.background.hover};
//   }
//  @media ${device.mobile} {
//     font-size: 12px !important;
//   }
// `;
