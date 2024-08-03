import styled from "styled-components";

export const ButtonInput = styled.button`
  height: 45px;
  font-size: 18px;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  outline: none;
  border-radius: 2px;
  border: none;
  margin: 30px 0 15px 0;
  color: #181b1e;
  :hover {
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 47px;
  }
`;
