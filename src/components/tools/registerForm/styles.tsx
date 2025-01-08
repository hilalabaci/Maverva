import styled from "styled-components";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorIcon from "@mui/icons-material/Error";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 23pc;
`;
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EmailLabel = styled.label`
  font-weight: 500;
  font-size: 0.857143em;
  margin-bottom: 5px;
  color: #fff;
`;
type CommonPropsType = {
  $googleVerifyEmail?: boolean;
  $errorEmailDisplay?: boolean;
};
export const EmailWrapper = styled.div<CommonPropsType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5em;
  padding-inline-start: 1.25rem;
  border-radius: 2rem;
  outline: none;
  border: 0px;
  font-size: 1rem;
  font-weight: 400;
  background-color: #ffffff;
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  border-color: #22a06b;

  outline: ${({ $errorEmailDisplay }) =>
    $errorEmailDisplay ? "0px" : "1px solid #de350b"};
`;
export const IconError = styled(ErrorIcon)<CommonPropsType>`
  opacity: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "1")};
  font-size: 23px !important;
  color: rgb(222, 53, 11);
`;
export const AccoutCreatInput = styled.input`
  border: none;
  font-size: 1rem;
  outline: none;
  font-weight: 400;
  flex: 1;
`;

export const CheckEmail = styled(
  CheckCircleOutlineOutlinedIcon
)<CommonPropsType>`
  display: "inline-block";
  opacity: ${(props) => (props.$googleVerifyEmail ? "1" : "0")};
  flex-shrink: 0;
  line-height: 1;
  width: 24px !important;
  height: 24px !important;
  padding-right: 10px !important;
  color: rgb(34, 160, 107);
`;
export const ErrorText = styled.div<CommonPropsType>`
  opacity: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "1")};
  width: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "auto")};
  height: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "auto")};
  color: #de350b;
  font-size: 0.85rem;
  margin-block-start: 6px;
  line-height: 1.5;
`;
export const EmailHelpText = styled.div<CommonPropsType>`
  opacity: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "1")};
  width: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "auto")};
  height: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "auto")};
  font-size: 12px;
  margin-block-start: 6px;
  color: #ffffff;
  font-weight: 500;
`;
export const SubmitWrapper = styled.div``;
export const SubmitButton = styled.button`
  align-items: center;
  display: flex;
  font-weight: 500;
  height: 40px;
  border: none;
  background-color: #fca700;
  font-size: 1.1rem;
  color: #172b4d;
  border-radius: 2rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 1px 1px 0 #091e4240, 0 0 1px 0 #091e424f;
  &:hover {
    background-color: #ff8b00;
  }
`;
export const SubmitButtonText = styled.span`
  min-width: 100%;
`;
export const LineforGoogleWrapper = styled.div`
  font-size: 0.875rem;
  margin-top: 2rem;
  line-height: 0.25px;
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;
export const FirstLine = styled.div`
  border-style: solid;
  margin-right: 1rem;
  margin-left: 1rem;
  opacity: 0.25;
  border-width: 0.125px;
  flex-grow: 1;
`;
export const LastLine = styled.div`
  border-style: solid;
  opacity: 0.25;
  border-width: 0.125px;
  margin-left: 1rem;
  margin-right: 1rem;
  flex-grow: 1;
`;
export const GoogleSignWrapper = styled.div`
margin-top: 25px;
`;
export const GoogleSignButton = styled.button`
  border-radius: 2rem;
  font-size: 1.1rem;
  color: #172b4d;
  background-color: #ffffff;
  padding-left: 0.75rem;
  padding-bottom: 0.5rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  gap: 0.5rem;
  box-shadow: 0 1px 1px 0 #091e4240, 0 0 1px 0 #091e424f;
  height: 40px;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  width: 100%;
  &:hover {
    background-color: #f1f2f4;
  }
`;
export const GoogleSignButtonText = styled.span`
  font-weight: 500;
  color: #2f4156;
  font-size: 1rem;
`;
