import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import BoardCreate from "../board-add/create";
import BoardList from "../board-list";
import { Container, AddBoardWrapper, IconWrapper, ListWrapper } from "./styles";
import { useUserContext } from "../../../contexts/UserContext";

function BoardMenu(props) {
  const { user } = useUserContext();
  const [key, setKey] = useState(false);

  function handlerClick() {
    setKey(true);
  }

  useEffect(() => {
    loadBoards();
    // eslint-disable-next-line
  }, []);

  async function loadBoards() {
    const response = await fetch(
      "http://127.0.0.1:3001/board?userId=" + user._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      props.setBoards(data);
    }
  }

  function onDelete(id) {
    props.setBoards(props.boards.filter((board) => board._id !== id));
  }

  function onCreate(data) {
    props.setBoards([data, ...props.boards]);
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
          boards={props.boards}
          onDelete={onDelete}
        />
      </ListWrapper>
    </Container>
  );
}
export default BoardMenu;
