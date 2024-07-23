import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const SearchContainer = styled.div`
  height: 30px;
  display: flex;
  border-radius: 5px;
  border: 1.5px solid ${(props) => props.theme.searchBorder};
  transition: width 10s ease-in-out 0.5s;
  ::placeholder {
    opacity: 0.1;
  }
  :focus-visible {
    width: 700px;
  }
  @media only screen and (max-width: 768px) {
    border: none;
  }
`;
export const IconWrapper = styled.button`
  background-color: rgba(255, 255, 255, 0.17);
  border: none;
  outline: none;
  color: #ffffff2b;
  @media only screen and (max-width: 768px) {
    background: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;
export const Input = styled.input`
  flex: 1;
  font-family: "Inter";
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.17);
  font-size: 15px;
  color: ${(props) => props.theme.fontColour};
  input[type="search"]::-webkit-search-decoration {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Icon = styled(SearchIcon)`
  border: none;
  outline: none;
  margin-top:3px;
  color: ${(props) => props.theme.searchBorder};
  display: flex;
  font-size: 15px !important;
`;
