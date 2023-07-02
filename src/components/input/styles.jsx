import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;
export const TextWrapper = styled.span`
  font-size: 18px;
  text-align: start;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Inputs = styled.input`
  height: 45px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 15px;
  font-size: 18px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  :focus {
    border-color: #9b59b6;
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const WarningMessage = styled.p`
  color: #dc3545;
`;
