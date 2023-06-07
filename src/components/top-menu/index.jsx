import React, { useCallback, useEffect, useState } from "react";
import { Container, BoardTitle, EditBoardTitle } from "./styles";

function TopMenu(props) {
  const [boardTitle, setBoardTitle] = useState(props.topMenuTitle);

  useEffect(() => {
    setBoardTitle(props.topMenuTitle);
  }, [props.topMenuTitle]);

  const updateTitle = useCallback(async () => {
    const id = props.boardId;
    const title = boardTitle;
    const body = { title, id };
    const response = await fetch("http://127.0.0.1:3001/board", {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
     
    }
  }, [boardTitle]);

  const [editBoardTitle, setEditBoardTitle] = useState(false);
  function openEditBoardTitle() {
    setEditBoardTitle(true);
  }
  function closeEditBoardTitle() {
    setEditBoardTitle(false);
    updateTitle();
  }

  return (
    <Container onBlur={closeEditBoardTitle}>
      {editBoardTitle ? (
        <EditBoardTitle
          value={boardTitle}
          onChange={(e) => {
            setBoardTitle(e.target.value);
          }}
        />
      ) : (
        <BoardTitle onClick={openEditBoardTitle}>{boardTitle}</BoardTitle>
      )}
    </Container>
  );
}
export default TopMenu;
