import BacklogCards from "../../../components/actions/backlogCards";
import Sprint from "../../../components/actions/sprint";
import { CardType } from "../../../types";
import { Container } from "./styles";

function Backlog() {
  return (
    <Container>
      <Sprint />
      <BacklogCards
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        AddedBacklogCard={function (card: CardType): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Container>
  );
}
export default Backlog;
