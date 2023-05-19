import React, { useEffect, useState } from "react";
import BoardLabel from "../board-label";

function BoardList() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    loadBoards();
  }, []);

  async function loadBoards() {
    const response = await fetch("http://127.0.0.1:3001/board", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setBoards(data);
    }
  }

  return (
    <div>
      {boards.map((board, index) => (
        <BoardLabel title={board.title} key={index} />
      ))}
    </div>
  );
}
export default BoardList;
