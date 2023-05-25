import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import BoardCreate from "../board-add/create";
import BoardList from "../board-list";
import { Container, AddBoardWrapper, IconWrapper, ListWrapper } from "./styles";

function BoardMenu(props) {
  const [key, setKey] = useState(false);
  const [boards, setBoards] = useState([]);

  function handlerClick() {
    setKey(true);
  }

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

  function onDelete(id) {
    setBoards(boards.filter((board) => board._id !== id));
  }

  function onCreate(data) {
    setBoards([...boards, data]);
    setKey(false);
  }
  return (
    <Container>
      <AddBoardWrapper>
        <div>Your Boards</div>
        <IconWrapper onClick={handlerClick}>
          <AddIcon />
        </IconWrapper>
      </AddBoardWrapper>
      {key && <BoardCreate onCreate={onCreate} />}
      <ListWrapper>
        <BoardList
          onBoardChange={props.onBoardChange}
          boards={boards}
          onDelete={onDelete}
        />
      </ListWrapper>
    </Container>
  );
}
export default BoardMenu;
