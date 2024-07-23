import React from "react";
import MemberButton from "../user/member-button";

import {
  BrandContainer,
  BrandLogo,
  NavbarContainer,
  GlobalStyle,
  SearchUser,
  LightMode,
  DarkMode,
} from "./styles";
import { Button } from "@mui/material";
import { useTheme } from "../../../contexts/ThemeContext";
import Search from "../search";

function Navbar(props) {
  const { changeMode, mode, theme } = useTheme();
  return (
    <NavbarContainer color={theme.primary}>
      <GlobalStyle />
      <BrandContainer>
        <BrandLogo />
        PROCESS
      </BrandContainer>
      <SearchUser>
        <Search onSearch={props.onSearch} />
        <Button
          onClick={() => {
            changeMode(mode === "light" ? "dark" : "light");
          }}
        >
          {mode === "light" ? <DarkMode /> : <LightMode />}
        </Button>
        <MemberButton />
      </SearchUser>
    </NavbarContainer>
  );
}
export default Navbar;
