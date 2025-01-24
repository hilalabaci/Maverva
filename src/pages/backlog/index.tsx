import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BacklogCards from "../../components/actions/backlogCards";
import Sprint from "../../components/actions/sprints";
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
