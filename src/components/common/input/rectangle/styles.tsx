import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const InputContainer = styled.div`
  border-radius: 3px;
  color: ${(props) => props.theme.fontColour};
  outline: none;
  box-shadow: 0 1px 1px 0 #091e4240, 0 0 1px 0 #091e424f;
  font-size: 1rem;
  font-weight: 400;
`;

export const Inputs = styled.input`
  background-color: transparent;
  padding: 12px 5px;
  color: ${(props) => props.theme.fontColour};
  outline: none;
  border: none;
  width: 100%;
`;
export const Icon = styled(CheckCircleIcon)`
  color: green;
  padding: 0 10px;
  transition: all 0.3s ease;
`;
export const WarningMessage = styled.p`
  color: #dc3545;
  font-size: 0.79rem;
  margin: 0;
  padding: 5px 5px 0 0;
  text-align: right;
`;
export const EmailIcon = styled(MailOutlinedIcon)`
  color: #091e4240;
  font-size: 20px !important;
`;
export const LabelTitle = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColourSoft};
  &::after {
    content: "*";
    margin-left: 3px;
    position: relative;
    top: -2px;
    color: red;
  }
`;
