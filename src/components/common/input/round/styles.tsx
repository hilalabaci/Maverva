import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEye } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const InputContainer = styled.div`
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
  background-color: #ffffff;
  color: ${(props) => props.theme.colour.text.inverted};
`;

export const Inputs = styled.input`
  border: none;
  font-size: 14px;
  outline: none;
  font-weight: 400;
  flex: 1;
  color: ${(props) => props.theme.colour.text.inverted};

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
export const PasswordIconButton = styled.button`
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
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.colour.text.inverted};
  padding: 0;
  margin: 0;
`;
export const PasswordIconHidden = styled(FaEye)`
  width: 2em;
  height: 2em;
  color: ${(props) => props.theme.colour.text.inverted};
  padding: 0;
  margin: 0;
`;

export const LabelforInput = styled.span`
  color: ${(props) => props.theme.colour.text.subtitle};
  font-size: 12px;
  font-weight: bold;
`;
