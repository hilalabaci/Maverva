import React, { useState } from "react";
import Card from "../card/Card";
import "./CardList.css";
import AddIcon from "@mui/icons-material/Add";
import NumberofCards from "./number-cards";
function CardList(props) {
  const [cards, setCards] = useState([{ note: "this is first note" }]);
  function dynamicAddCard() {
    setCards([...cards, { note: "new note" }]);
  }
  return (
    <div className="card-list-container">
      <div className="title-container">
        <title>{props.title}</title>
        <NumberofCards />
      </div>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} note={card.note} />
        ))}
      </div>
      <div className="add-card-CardList-wrapper">
        <button
          onClick={dynamicAddCard}
          className="add-card-CardList-button"
          type="submit"
        >
          <AddIcon className="addIcon-button" /> Add a card
        </button>
      </div>
    </div>
  );
}
export default CardList;
