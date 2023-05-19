import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 291px;
  height: 45px;
  display: flex;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.54);
  ::placeholder {
    opacity: 0.5;
  }
  :hover {
    cursor: pointer;
  }
  :focus-visible {
  border: 1px solid rgba(255, 255, 255, 0.54);
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 2px 0px;
}
`;
export const IconWrapper = styled.button`
  background-color: rgba(255, 255, 255, 0.17);
  border: none;
  outline: none;
  padding: 0px 15px;
  color: #ffffff2b;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex: 1;
`;
export const Input = styled.input`
  flex: 1;
  font-family: "Inter";
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.17);
  background-size: 20px 20px;
  font-size: 20px;
  background-repeat: no-repeat;
  color: rgba(255, 255, 255, 0.54);
  input[type="search"]::-webkit-search-decoration {
    display: none;
  }
`;
