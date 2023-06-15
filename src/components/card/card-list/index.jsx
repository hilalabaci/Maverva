import React, { useState } from "react";
import Card from "../cards/Card";
import AddIcon from "@mui/icons-material/Add";
import NumberOfCards from "../number-cards";
import {
  CardWrapper,
  Container,
  Title,
  TitleWrapper,
  AddCardButtonWrapper,
  AddCardButton,
} from "./styles";
import AddCard from "../add-a-card/AddCard";

function CardList(props) {
  const [showAdd, setShowAdd] = useState(false);
  function dynamicAddCard() {
    setShowAdd(true);
    /*  setCards([...cards, { note: "new note" }]); */
  }
  function closeAddCard() {
    setShowAdd(false);
  }
  return (
    <Container>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <NumberOfCards
          numberOfCards={props.numberOfCards}
          numberOfFilteredCards={props.numberOfFilteredCards}
        />
      </TitleWrapper>
      <CardWrapper>
        {props.cards?.map((card, index) => (
          <Card
            onUpdate={props.onUpdate}
            onDelete={props.onDelete}
            id={card._id}
            key={index}
            title={card.content}
            labels={card.labels}
          />
        ))}
      </CardWrapper>
      <AddCardButtonWrapper>
        {showAdd ? (
          <AddCard
            addedCard={props.addedCard}
            boardId={props.boardId}
            onClose={closeAddCard}
            status={props.status}
          />
        ) : (
          <AddCardButton onClick={dynamicAddCard} type="submit">
            <AddIcon className="addIcon-button" /> Add a card
          </AddCardButton>
        )}
      </AddCardButtonWrapper>
    </Container>
  );
}
export default CardList;
