import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BacklogCards from "../../../components/actions/backlogCards";
import Sprint from "../../../components/actions/sprints";
import { CardType } from "../../../types";
import { Container } from "./styles";

function Backlog() {
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <Sprint />
        <BacklogCards
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
          AddedBacklogCard={function (card: CardType): void {
            throw new Error("Function not implemented.");
          }}
        />
      </DndProvider>
    </Container>
  );
}
export default Backlog;
