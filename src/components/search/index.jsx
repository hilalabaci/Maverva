import React from "react";
import {
  SearchContainer,
  IconWrapper,
  InputWrapper,
  Input,
  Icon,
} from "./styles";
function Search(props) {
  return (
    <SearchContainer tabindex="1">
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <InputWrapper>
        <Input onChange={props.onSearch} placeholder="Search.." />
      </InputWrapper>
    </SearchContainer>
  );
}
export default Search;
