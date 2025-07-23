import styled from "styled-components";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const Container = styled.form`
  background-color: ${(props) => props.theme.cardBG};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 2px;
  border-radius: 3px;
  padding: 8px 4px;
  border: ${(props) => props.theme.activeBorder};
  @media only screen and (max-width: 768px) {
    border-radius: 15px;
    padding: 10px;
    height: 70px;
  }
`;
export const Textarea = styled.input`
  background-color: ${(props) => props.theme.colour.background.default};
  border: ${(props) => props.theme.colour.border.default};
  outline: none;
  border: none;
  color: ${(props) => props.theme.colour.text.inverted};
  opacity: 0.7;
  text-align: left;
  resize: none;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 5px;
  border-radius: 3px;
  &::placeholder {
    color: ${(props) => props.theme.colour.text.surface};
    font-size: 14px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ButtonWrapper = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  background-color: #579dff;
  border: none;
  color: ${(props) => props.theme.primary};
  border-radius: 2px;
  opacity: 0.6;
  padding: 5px;
  &:hover {
    background-color: #a8ccff;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 4px;
  }
`;

export const CloseIcon = styled(CloseRoundedIcon)`
  color: ${(props) => props.theme.fontColour};
  font-size: 15px !important;
  display: flex;
`;
