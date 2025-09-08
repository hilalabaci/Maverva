import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
type InputContainerProps = {
  error?: boolean;
  filled?: boolean;
};
export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding-inline-start: 1.25rem;
  padding-inline-end: 1.25rem;
  border-radius: 3px;
  outline: none;
  box-shadow: 0 1px 1px 0 #091e4240, 0 0 1px 0 #091e424f;
  font-size: 14px;
  font-weight: 400;
  gap: 5px;
  background-color: ${(props) =>
    props.filled
      ? props.theme.colour.background.muted
      : props.theme.colour.background.default};
  color: ${(props) => props.theme.colour.text.inverted};
  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colour.border.focus};
    box-shadow: ${(props) =>
      props.filled
        ? `0 0 0 2px ${props.theme.colour.background.muted}`
        : `0 0 0 2px ${props.theme.colour.border.focus}`};
  }
`;

export const Inputs = styled.input<InputContainerProps>`
  border: none;
  font-size: 14px;
  outline: none;
  font-weight: 400;
  flex: 1;
  background-color: ${(props) =>
    props.filled
      ? props.theme.colour.background.muted
      : props.theme.colour.background.default};
  color: ${(props) =>
    props.filled ? "#091e424f" : props.theme.colour.text.inverted};
  font-size: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Icon = styled(CheckCircleIcon)`
  color: green;
  padding: 0 10px;
  transition: all 0.3s ease;
`;
export const InfoMessage = styled.p`
  color: ${(props) => props.theme.colour.text.subtitle};
  font-size: 12px;
  margin: 0;
  padding: 5px 5px 0 0;
  text-align: right;
`;
export const WarningMessage = styled.p`
  color: #dc3545;
  font-size: 12px;
  margin: 0;
  padding: 5px 5px 0 0;
  text-align: right;
`;
export const EmailIcon = styled(MailOutlinedIcon)`
  color: #091e4240;
  font-size: 20px !important;
`;
export const IconButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 1px 5px;
  border-radius: 3px;
  &:hover {
    background-color: ${(props) => props.theme.colour.background.cardBG.hover};
  }
`;
export const PasswordIcon = styled(MdOutlineRemoveRedEye)`
  width: 1.7em;
  height: 1.7em;
  color: ${(props) => props.theme.colour.text.inverted};
  padding: 0;
  margin: 0;
`;
export const PasswordIconHidden = styled(FaEye)`
  width: 1.7em;
  height: 1.7em;
  color: ${(props) => props.theme.colour.text.inverted};
  padding: 0;
  margin: 0;
`;

type LabelforInputProps = {
  fontColour?: "Dark" | "Light";
};

export const LabelforInput = styled.span<LabelforInputProps>`
  color: ${(props) =>
    props.fontColour === "Dark" ? props.theme.colour.text.subtitle : "#ffffff"};
  font-size: 12px;
  font-weight: bold;
  &::after {
    content: "*";
    color: #dc3545;
    padding-left: 2px;
  }
`;
export const EditIcon = styled(MdOutlineEdit)`
  width: 1.7em;
  height: 1.7em;
`;
