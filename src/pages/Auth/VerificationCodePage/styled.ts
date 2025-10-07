import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
export const Title = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.colour.text.inverted};
`;
export const ImgWrapper = styled.div``;
export const IllusSendEmail = styled.img`
  width: 200px;
  @media ${device.mobile} {
    width: 150px;
  }
`;
export const ContainerSendEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  gap: 10px;
  @media ${device.mobile} {
  }
`;
export const ExplainTitle = styled.div`
  color: ${(props) => props.theme.colour.text.primary};
  font-size: ${(props) => props.theme.fontSize.default};
  line-height: 1.5;
`;
export const EmailforLogin = styled.p`
  color: #2f4156;
  font-weight: 600;
  margin: 5px 0 0 0;
`;
export const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
export const ButtonText = styled.p`
  color: ${(props) => props.theme.colour.themeActiveColor};
  font-size: ${(props) => props.theme.fontSize.default};
  &:hover {
    text-decoration: underline;
  }
`;
export const VerifyCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 20px;
  width: 100%;
`;
export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #dc3545;
  font-size: 0.79rem;
  margin: 0;
  text-align: right;
`;
