import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const SearchContainer = styled.button<{ isClicked: boolean }>`
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  outline: none;
  border: ${(props) => props.theme.searchBorder};
  outline: ${(props) =>
    props.isClicked ? props.theme.searchOutlineColour : "none"};
  background-color: ${(props) => props.theme.searchInputBg};
  transition: border-width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  box-sizing: border-box;
  ::placeholder {
    opacity: 1;
    color: ${(props) => props.theme.searchPlaceHolderFontColour};
  }
  &:hover {
    background-color: ${(props) => props.theme.searchInputBgHover};
  }
  @media only screen and (max-width: 768px) {
    border: none;
  }
`;
export const IconWrapper = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #a1bdd914;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 768px) {
    background: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  padding: 0 5px;
  gap: 5px;
  :focus-visible {
    border: 1px solid
      linear-gradient(135deg, rgb(113, 183, 230, 0.3), rgb(155, 89, 182, 0.3));
  }
`;
export const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: ${(props) => props.theme.fontColour};
  padding: 0;
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
  margin-top: 3px;
  color: ${(props) => props.theme.searchPlaceHolderFontColour};
  display: flex;
  font-size: 16px !important;
`;
