import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { device } from "../../../styles/breakpoints";

export const SearchContainer = styled.div<{ $isclicked: boolean }>`
  height: 35px;
  width: 185px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  outline: ${(props) =>
    props.$isclicked
      ? props.theme.colour.search.border.active
      : props.theme.colour.search.border.default};
  background-color: ${(props) => props.theme.colour.search.background.default};
  transition: border-width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  box-sizing: border-box;
  ::placeholder {
    opacity: 1;
    color: ${(props) => props.theme.searchPlaceHolderFontColour};
  }
  &:hover {
    background-color: ${(props) => props.theme.colour.search.background.hover};
  }
 @media ${device.mobile} {
    border: none;
  }
`;
export const IconWrapper = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colour.search.icon.default};
  padding: 0;
  margin: 0;
 @media ${device.mobile} {
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
  color: ${(props) => props.theme.colour.text.default};
  padding-inline-start: 6px;
  input[type="search"]::-webkit-search-decoration {
    display: none;
  }
 @media ${device.mobile} {
    display: none;
  }
`;
export const Icon = styled(SearchIcon)`
  border: none;
  outline: none;
  margin-top: 3px;
  color: ${(props) => props.theme.colour.search.icon.default};
  display: flex;
  font-size: 18px !important;
`;
