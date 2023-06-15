import Search from "../search";
import React from "react";
import User from "../user";
import {
  BrandContainer,
  BrandLogo,
  NavbarContainer,
  GlobalStyle,
  SearchUser,
} from "./styles";
function Navbar(props) {
  return (
    <NavbarContainer>
      <GlobalStyle />
      <BrandContainer>
        <BrandLogo src="/icons/brand.png" />
        PROCESS
      </BrandContainer>
      <SearchUser>
        <Search onSearch={props.onSearch} />
        <User />
      </SearchUser>
    </NavbarContainer>
  );
}
export default Navbar;
