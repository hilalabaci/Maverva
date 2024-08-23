import React from "react";
import {
  SearchContainer,
  IconWrapper,
  InputWrapper,
  Input,
  Icon,
} from "./styles";
type SearchPropsType = {
  onSearch: (value: string) => void;
};
function Search(props: SearchPropsType) {
  return (
    <SearchContainer tabIndex={1}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <InputWrapper>
        <Input
          onChange={(e) => props.onSearch(e.target.value)}
          placeholder="Search.."
        />
      </InputWrapper>
    </SearchContainer>
  );
}
export default Search;
