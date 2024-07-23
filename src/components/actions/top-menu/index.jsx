import React, { useEffect, useState } from "react";
import {
  Container,
  BoardTitle,
  EditBoardTitle,
  TitleContainer,
} from "./styles";

function TopMenu(props) {
  const [boardTitle, setBoardTitle] = useState(props.topMenuTitle);

  useEffect(() => {
    setBoardTitle(props.topMenuTitle);
  }, [props.topMenuTitle]);

  async function updateTitle() {
    const id = props.boardId;
    const title = boardTitle;
    const body = { title, id };
    const response = await fetch(process.env.REACT_APP_API_URL + "board", {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      props.onBoardUpdate(data);
    }
  }

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
      <TitleContainer>
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
      </TitleContainer>
    </Container>
  );
}
export default TopMenu;
