import Search from "../search";
import React from "react";
import User from "../user";
import {
  BrandContainer,
  BrandLogo,
  NavbarContainer,
  GlobalStyle,
  SearchUser,
  UserWrapper,
  SearchWrapper,
} from "./styles";
function Navbar() {
  return (
    <NavbarContainer>
      <GlobalStyle />
      <BrandContainer>
        <BrandLogo src="/icons/brand.png" />
        PROCESS
      </BrandContainer>
      <SearchUser>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
        <UserWrapper>
          <User />
        </UserWrapper>
      </SearchUser>
    </NavbarContainer>
  );
}
export default Navbar;
