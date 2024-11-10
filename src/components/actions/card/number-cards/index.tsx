import { Container } from "./styles";
type NumberOfCardsPropsType = {
  numberOfFilteredCards: number;
  numberOfCards: number;
};

function numberOfCards(props: NumberOfCardsPropsType) {
  return <Container>{props.numberOfCards}</Container>;
}
export default numberOfCards;
