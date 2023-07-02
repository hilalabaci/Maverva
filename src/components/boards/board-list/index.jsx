import React from "react";
import BoardLabel from "../board-label";

function BoardList(props) {
  async function deleteItem(id) {
    const response = await fetch(process.env.REACT_APP_API_URL + "board?id=" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      props.onDelete(id);
    }
  }
  return (
    <div>
      {props.boards.map((board, index) => (
        <BoardLabel
          onClick={() => props.onBoardChange(board._id,board.title)}
          onDelete={() => deleteItem(board._id)}
          title={board.title}
          key={index}
        />
      ))}
    </div>
  );
}
export default BoardList;
