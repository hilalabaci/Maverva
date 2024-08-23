import { Container } from "./styles";
type NumberOfCardsPropsType = {
  numberOfFilteredCards: number;
  numberOfCards: number;
};

function numberOfCards(props: NumberOfCardsPropsType) {
  return (
    <Container>
      {props.numberOfFilteredCards}/{props.numberOfCards}
    </Container>
  );
}
export default numberOfCards;
