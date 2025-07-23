import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export const Container = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 3px;
  padding: 2px 4px;
  background-color: ${(props) => props.theme.colour.background.default};
  /* box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0px 0px 1px #172b4d00, 0 0 1px #172b4d33; */
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.default};
  }
`;

export const ApproveIcon = styled(DoneIcon)`
  font-size: 25px !important;
  color: ${(props) => props.theme.colour.text.default};
`;
export const CloseIcon = styled(CloseRoundedIcon)`
  font-size: 25px !important;
  color: ${(props) => props.theme.colour.text.default};
`;
export const MoreIcon = styled(MoreHorizRoundedIcon)`
  font-size: 25px !important;
  color: ${(props) => props.theme.colour.text.default};
`;
