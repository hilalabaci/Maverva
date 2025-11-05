import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { device } from "../../../../styles/breakpoints";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div<{ isSpecialBackground?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 5px;
  border-radius: 3px;
  color: ${(props) => props.theme.colour.modal.text.default};
  outline: ${(props) => props.theme.colour.modal.border.default};
  background-color: ${({ isSpecialBackground, theme }) =>
    isSpecialBackground
      ? theme.colour.primary.button.secondary.background.default
      : "transparent"};
  border: none;
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 400;
  margin-top: 7px;
  min-width: 250px;
`;

export const Inputs = styled.input<{ size?: number }>`
  background-color: transparent;
  color: ${(props) => props.theme.colour.text.inverted};
  outline: none;
  border: none;
  width: 100%;
  padding: ${(props) => (props.size ? `${props.size}px 3px 5px;` : "12px 5px")};
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.default};
  }
`;
export const Icon = styled(CheckCircleIcon)`
  color: green;
  padding: 0 10px;
  transition: all 0.3s ease;
`;
export const WarningMessage = styled.div`
  color: #dc3545;
  font-size: 12px;
  margin: 0;
  text-align: right;
  width: 100%;
  padding-top: 4px;
  font-weight: 500;
`;
export const EmailIcon = styled(MailOutlinedIcon)`
  color: ${(props) => props.theme.colour.text.inverted};
  font-size: 20px !important;
`;
export const LabelTitle = styled.label`
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-weight: 600;
  color: ${(props) => props.theme.colour.text.inverted};
  &::after {
    content: "*";
    margin-left: 3px;
    position: relative;
    top: -2px;
    color: red;
  }
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.default};
  }
`;
