import React from "react";
import BoardMenu from "../../components/boards/board-menu";
import Navbar from "../../components/navbar";
import CardList from "../../components/card/card-list";
import {
  Container,
  NavbarWrapper,
  Wrapper,
  Menu,
  Main,
  GlobalStyle,
  MainContainer,
  MainTitle,
} from "./styles";


function Home() {
  return (
    <Container>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <Wrapper>
        <Menu>
          <BoardMenu />
        </Menu>
        <MainContainer>
          <MainTitle>
          </MainTitle>
          <Main>
            <CardList title="TO DO" />
            <CardList title="IN PROGRESS" />
            <CardList title="DONE" />
          </Main>
        </MainContainer>
      </Wrapper>
    </Container>
  );
}
export default Home;
