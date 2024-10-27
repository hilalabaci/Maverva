import BacklogCards from "../../../components/actions/backlogCards";
import Sprint from "../../../components/actions/sprint";
import { Container } from "./styles";

function Backlog() {
  return (
    <Container>
      <Sprint />
      <BacklogCards />
    </Container>
  );
}
export default Backlog;
