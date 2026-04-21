import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #e2ded3;
  font-size: 13px;
  color: #74767d;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const FooterLink = styled.button`
  background: none;
  border: none;
  color: #16171b;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  margin-left: 4px;

  &:hover {
    color: #1e2a5e;
  }
`;

export const Point = styled.span`
  color: #d4cfc1;
`;

export const TermsText = styled.span`
  font-size: 12.5px;
  color: #74767d;
  line-height: 1.55;

  a {
    color: #16171b;
    text-decoration: underline;
    text-decoration-color: #d4cfc1;
    text-underline-offset: 3px;

    &:hover {
      text-decoration-color: #1e2a5e;
    }
  }
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

/* kept for legacy imports if any */
export const LoginContainer = styled.div``;
export const RememberWrapper = styled.div``;
export const CheckBoxText = styled.span``;
export const CheckBoxTextLink = styled.a``;

