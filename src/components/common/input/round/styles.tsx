import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5em;
  padding-inline-start: 1.25rem;
  border-radius: 2rem;
  outline: none;
  box-shadow: 0 1px 1px 0 #091e4240, 0 0 1px 0 #091e424f;
  font-size: 1rem;
  font-weight: 400;
  gap: 5px;
  background-color: #ffffff;
`;

export const Inputs = styled.input`
  border: none;
  font-size: 1rem;
  outline: none;
  font-weight: 400;
  flex: 1;
  color: navy;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
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
