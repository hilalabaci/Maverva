import styled from "styled-components";

export const VerificationContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 26px;
  letter-spacing: -0.015em;
  color: #16171B;
  text-align: center;
  margin: 0 0 8px;
  line-height: 1.15;
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
  gap: 10px;
  width: 100%;
`;

export const ExplainTitle = styled.div`
  color: #74767D;
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
`;

export const EmailforLogin = styled.p`
  color: #16171B;
  font-weight: 600;
  margin: 5px 0 0 0;
`;

export const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ButtonText = styled.p`
  color: #1E2A5E;
  font-size: 13px;
  font-weight: 500;
  margin: 0;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
