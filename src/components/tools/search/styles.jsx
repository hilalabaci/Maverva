import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const SearchContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #738496;
  //border: 1.5px solid ${(props) => props.theme.searchBorder};
  transition: width 10s ease-in-out 0.5s;
  ::placeholder {
    opacity: 0.1;
  }
  :hover{

  }
  :focus-visible {
    //width: 700px;
    border: 1px solid
      linear-gradient(135deg, rgb(113, 183, 230, 0.3), rgb(155, 89, 182, 0.3));
  }
  @media only screen and (max-width: 768px) {
    border: none;
  }
`;
export const IconWrapper = styled.button`
  background-color: ${(props) => props.theme.primary};
  border: none;
  outline: none;
  color: #a1bdd914;
  @media only screen and (max-width: 768px) {
    background: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  :focus-visible {
    width: 700px;
    border: 1px solid
      linear-gradient(135deg, rgb(113, 183, 230, 0.3), rgb(155, 89, 182, 0.3));
  }
`;
export const Input = styled.input`
  flex: 1;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.primary};
  font-size: 15px;
  color: #738496;
  //color: ${(props) => props.theme.fontColour};
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
  color: #738496;
  //color: ${(props) => props.theme.searchBorder};
  display: flex;
  font-size: 15px !important;
`;
