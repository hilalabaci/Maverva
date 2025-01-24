import { Container } from "./styles";
type NumberOfCardsPropsType = {
  numberOfFilteredCards: number;
  numberOfCards: number;
};

function NumberOfCards(props: NumberOfCardsPropsType) {
  return <Container>{props.numberOfCards}</Container>;
}
export default NumberOfCards;
