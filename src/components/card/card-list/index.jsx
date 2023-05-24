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
  /*   const [cards, setCards] = useState([{ note: "this is first note" }]); */
  function dynamicAddCard() {
    setShowAdd(true);
    /*   setCards([...cards, { note: "new note" }]); */
  }
  return (
    <Container>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <NumberofCards />
      </TitleWrapper>
      <CardWrapper>
        {/*      {cards.map((card, index) => (
          <Card key={index} note={card.note} />
        ))} */}
      </CardWrapper>

      <AddCardButtonWrapper>
        {showAdd ? (
          <AddCard
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
