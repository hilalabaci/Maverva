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
import { CardType, DragItem } from "../../../../types";

// Define the type for the props
interface CardListProps {
  title: string;
  numberOfCards: number;
  numberOfFilteredCards: number;
  cards: CardType[];
  status: number;
  boardId: string;
  onUpdate: (card: CardType) => void; // Adjust 'any' to a specific type if known
  onDelete: (id: string) => void;
  addedCard?: (card: any) => void; // Adjust 'any' to a specific type if known
}

function CardList(props: CardListProps) {
  async function updateStatus(id: string, status: number) {
    const body = { status, id };
    const response = await fetch(process.env.REACT_APP_API_URL + "card", {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const card = (await response.json()) as CardType;
      props.onUpdate(card);
    }
  }
  const [, drop] = useDrop<DragItem>({
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
            content={card.content}
            labels={card.labels}
            userId={card.userId}
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
            <IconAdd /> Create issue
          </AddCardButton>
        )}
      </AddCardButtonWrapper>
    </Container>
  );
}
export default CardList;
