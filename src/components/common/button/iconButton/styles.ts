import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

type displayBorder = {
  boxShadow?: boolean;
  size?: "small" | "medium" | "large";
};

export const Container = styled.button<displayBorder>`
  cursor: pointer;
  border: none;
  border-radius: 3px;
  width: 2rem;
  height: 2rem;
  border: ${(props) => props.theme.colour.iconButton.default.border};
  box-shadow: ${(props) =>
    props.boxShadow
      ? `${props.theme.colour.iconButton.default.boxShadow}`
      : "none"};
  transition: box-shadow 0.2s ease;
  padding-inline-end: 0;
  padding-inline-start: 0;
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

export const ApproveIcon = styled(DoneIcon)<displayBorder>`
  font-size: ${(props) =>
    props.size === "small"
      ? "18px"
      : props.size === "medium"
      ? "19px"
      : "25px"} !important;
  color: ${(props) => props.theme.colour.iconButton.default.icon} !important;
`;
export const CloseIcon = styled(CloseRoundedIcon)<displayBorder>`
  font-size: ${(props) =>
    props.size === "small"
      ? "18px"
      : props.size === "medium"
      ? "19px"
      : "25px"} !important;
  color: ${(props) => props.theme.colour.iconButton.default.icon} !important;
`;
export const MoreIcon = styled(MoreHorizRoundedIcon)<displayBorder>`
  font-size: ${(props) =>
    props.size === "small"
      ? "18px"
      : props.size === "medium"
      ? "19px"
      : "25px"} !important;
  color: ${(props) => props.theme.colour.iconButton.default.icon} !important;
`;
