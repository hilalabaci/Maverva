import React from "react";
import Card from "../card/Card";
import "./CardList.css";
function CardList() {
  return (
    <div className="card-list-container">
      <div className="title-container">
        <title>this a title</title>
        <span>3</span>
      </div>
      <div className="cards-container">
        <Card note="this is first note" />
      </div>
    </div>
  );
}
export default CardList;
