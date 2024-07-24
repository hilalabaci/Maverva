import React, { useState } from "react";
import Card from "../cards/Card";

import NumberOfCards from "../number-cards";
import {
  CardWrapper,
  Container,
  Title,
  TitleWrapper,
  AddCardButtonWrapper,
  AddCardButton,
  IconAdd,
} from "./styles";
import AddCard from "../add-a-card/AddCard";
import { useDrop } from "react-dnd";

function CardList(props) {
  async function updateStatus(id, status) {
    const body = { status, id };
    const response = await fetch(process.env.REACT_APP_API_URL + "card", {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      props.onUpdate(id, data);
    }
  }
  const [, drop] = useDrop({
    accept: "CARD",
    drop: (item) => {
      updateStatus(item.id, props.status);
    },
  });

  const [showAdd, setShowAdd] = useState(false);
  function dynamicAddCard() {
    setShowAdd(true);
    /*  setCards([...cards, { note: "new note" }]); */
  }
  function closeAddCard() {
    setShowAdd(false);
  }
  return (
    <Container ref={drop}>
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
            <IconAdd /> Add a card
          </AddCardButton>
        )}
      </AddCardButtonWrapper>
    </Container>
  );
}
export default CardList;
