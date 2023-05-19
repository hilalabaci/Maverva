import React from "react";
import AddBoard from "../../components/boards/add-board";
import Navbar from "../../components/navbar";
import CardList from "../../components/card-list/CardList";
import BoardList from "../../components/boards/add-board/board-list";
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
          <AddBoard />
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
