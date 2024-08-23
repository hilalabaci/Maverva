import { BoardType } from "../../../../types";
import BoardLabel from "../board-label";
import { Container } from "./styles";
type BoardListPropsType = {
  onDelete: (id: string) => void;
  boards: BoardType[];
  onBoardChange: (board: BoardType) => void;
};

function BoardList(props: BoardListPropsType) {
  async function deleteItem(id: string) {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "board?id=" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      props.onDelete(id);
    }
  }
  return (
    <Container>
      {props.boards.map((board, index) => (
        <BoardLabel
          onClick={() => props.onBoardChange(board)}
          onDelete={() => deleteItem(board._id)}
          title={board.title}
          key={index}
        />
      ))}
    </Container>
  );
}
export default BoardList;
