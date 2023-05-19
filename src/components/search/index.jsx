import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Container,IconWrapper,InputWrapper,Input } from "./styles";
function Search(props) {
  return (
    <Container >
      <IconWrapper >
        <SearchIcon />
      </IconWrapper>
      <InputWrapper  onChange={props.onSearch}>
        <Input placeholder="Search.." />
      </InputWrapper>
    </Container>
  );
}
export default Search;
