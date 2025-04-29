import styled from "styled-components";
export const Title = styled.h2`
  color: #2f4156;
`;
export const ImgWrapper = styled.div``;
export const IllusSendEmail = styled.img`
  width: 200px;
`;
export const ContainerSendEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-shadow: 0 24px 64px #26214a1a;
  border-radius: 15px;
  background: #ffffff;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    width: max-content;
  }
`;
export const ExplainTitle = styled.div`
  color: #2f4156;
  padding:0 25px;
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
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;
