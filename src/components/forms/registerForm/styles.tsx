import styled from "styled-components";

import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 23pc;
`;
type CommonPropsType = {
  $googleVerifyEmail?: boolean;
  $errorEmailDisplay?: boolean;
};
export const EmailHelpText = styled.div<CommonPropsType>`
  opacity: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "0.6")};
  width: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "auto")};
  height: ${({ $errorEmailDisplay }) => ($errorEmailDisplay ? "0" : "auto")};
  font-size: 12px;
  margin-block-start: 6px;
  color: #ffffff;
  font-weight: 400;
  padding: 5px 0px 10px 0px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
 @media ${device.mobile} {
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
 @media ${device.mobile} {
    font-size: 14px;
    font-weight: 400;
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
  @media ${device.mobile} {
  }
`;
