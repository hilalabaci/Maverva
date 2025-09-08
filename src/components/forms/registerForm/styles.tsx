import styled from "styled-components";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorIcon from "@mui/icons-material/Error";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 23pc;
`;
type CommonPropsType = {
  $googleVerifyEmail?: boolean;
  $errorEmailDisplay?: boolean;
};
export const EmailWrapper = styled.div<CommonPropsType>``;
export const EmailHelpText = styled.div<CommonPropsType>`
  opacity: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "1")};
  width: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "auto")};
  height: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "auto")};
  font-size: 12px;
  margin-block-start: 6px;
  color: #ffffff;
  font-weight: 500;
  padding: 5px 0px 10px 0px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
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
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
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
  @media only screen and (max-width: 768px) {
  }
`;
export const GoogleSignButton = styled.button`
  border-radius: 3px;
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
  font-weight: 600;
  color: #2f4156;
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
