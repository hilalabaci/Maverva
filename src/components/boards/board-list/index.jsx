import React from "react";
import BoardLabel from "../board-label";

function BoardList(props) {
  async function deleteItem(id) {
    const response = await fetch("http://127.0.0.1:3001/board?id=" + id, {
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
