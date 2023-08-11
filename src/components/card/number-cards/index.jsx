import React from "react";
import { Container } from "./styles";

function numberOfCards(props) {
  return (
    <Container>
      {props.numberOfFilteredCards}{/* /{props.numberOfCards} */}
    </Container>
  );
}
export default numberOfCards;
