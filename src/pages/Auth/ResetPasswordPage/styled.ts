import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const FormTitle = styled.h1`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: 56px;
  line-height: 0.98;
  letter-spacing: -0.022em;
  margin: 0 0 14px;
  color: #16171b;

  em {
    font-style: italic;
    color: #1e2a5e;
  }

  @media (max-width: 900px) {
    font-size: 42px;
  }
`;

export const CreateAccountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid #e2ded3;
  font-size: 13px;
  color: #74767d;
`;

export const CreateAccountListItemLink = styled.a`
  color: #16171b;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #1e2a5e;
  }
`;

