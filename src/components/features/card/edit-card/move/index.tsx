import {
  Container,
  Title,
  Wrapper,
  IconTodo,
  IconInProgress,
  IconDone,
} from "./styles";
import { CardType } from "../../../../../types";

type MoveProps = {
  onUpdate: (card: CardType) => void;
  cardId: string;
};
function Move(props: MoveProps) {
  async function updateStatus(status: number) {
    const id = props.cardId;
    const body = { status, id };
    const response = await fetch(process.env.REACT_APP_API_URL + "card", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = (await response.json()) as CardType;
      props.onUpdate(data);
    }
  }
  return (
    <Container>
      <Wrapper onClick={() => updateStatus(1)}>
        <IconTodo />
        <Title>To Do</Title>
      </Wrapper>
      <Wrapper onClick={() => updateStatus(2)}>
        <IconInProgress />
        <Title>In Progress</Title>
      </Wrapper>
      <Wrapper onClick={() => updateStatus(3)}>
        <IconDone />
        <Title>Done</Title>
      </Wrapper>
    </Container>
  );
}
export default Move;
