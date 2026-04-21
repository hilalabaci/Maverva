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

  &:hover {
    color: #1e2a5e;
  }
`;

