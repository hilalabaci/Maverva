import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BacklogCards from "../../features/backlogCards";
import Sprint from "../../features/sprints";
import { Container } from "./styles";

function Backlog() {
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <Sprint />
        <BacklogCards />
      </DndProvider>
    </Container>
  );
}
export default Backlog;
