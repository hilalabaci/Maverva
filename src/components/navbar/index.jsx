import Search from "../search";
import React from "react";
import MemberButton from "../user/member-button";

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
        <MemberButton />
      </SearchUser>
    </NavbarContainer>
  );
}
export default Navbar;
