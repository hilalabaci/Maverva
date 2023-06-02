import React, { useState } from "react";
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
  const [cards, setCards] = useState([]);
  const [boardId, setBoardId] = useState("");
  async function loadCards(boardId) {
    setBoardId(boardId);
    const response = await fetch(
      "http://127.0.0.1:3001/card?boardId=" + boardId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setCards(data);
    }
  }
  function deleteCard(id) {
    setCards(cards.filter((card) => card._id !== id));
  }
  function updateCard(id, card) {
    setCards([...cards.filter((card) => card._id !== id), card]);
  }
  function addedCard(card) {
    setCards([...cards, card]);
  }

  return (
    <Container>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <Wrapper>
        <Menu>
          <BoardMenu onBoardChange={loadCards} />
        </Menu>
        <MainContainer>
          <MainTitle></MainTitle>
          <Main>
            {boardId ? (
              <>
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="TO DO"
                  boardId={boardId}
                  cards={cards.filter((card) => card.status === 1)}
                />
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="IN PROGRESS"
                  boardId={boardId}
                  cards={cards.filter((card) => card.status === 2)}
                />
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="DONE"
                  boardId={boardId}
                  cards={cards.filter((card) => card.status === 3)}
                />
              </>
            ) : undefined}
          </Main>
        </MainContainer>
      </Wrapper>
    </Container>
  );
}
export default Home;
