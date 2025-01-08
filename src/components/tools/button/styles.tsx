import styled from "styled-components";

export const ButtonInput = styled.button`
  font-size: 1rem;
  background: #fca700;
  outline: none;
  border-radius: 2rem;
  border: none;
  color: #2f4156;
  height: 2.5em;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #ff8b00;
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 47px;
  }
`;
