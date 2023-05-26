import React, { useState } from "react";
import Card from "../cards/Card";
import AddIcon from "@mui/icons-material/Add";
import NumberofCards from "../number-cards";
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

  return (
    <Container>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <NumberofCards />
      </TitleWrapper>
      <CardWrapper>
        <CardWrapper>
          {props.cards.map((card, index) => (
            <Card
              onDelete={props.onDelete}
              id={card._id}
              key={index}
              title={card.content}
            />
          ))}
        </CardWrapper>
      </CardWrapper>

      <AddCardButtonWrapper>
        {showAdd ? (
          <AddCard
            boardId={props.boardId}
            onClose={() => {
              setShowAdd(false);
            }}
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
