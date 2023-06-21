import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Container, InputStyle, GlobalStyle, SubmitButton } from "./styles";
import { useUserContext } from "../../../contexts/UserContext";

function BoardCreate(props) {
  const [boardTitle, setBoardTitle] = useState("");
  const { user } = useUserContext();
  const userId = user._id;

  function handleChange(event) {
    const { value } = event.target;
    setBoardTitle(value);
  }
  async function onSubmit(event) {
    event.preventDefault();
    const boardData = { title: boardTitle, userId: userId };
    const response = await fetch("http://127.0.0.1:3001/board", {
      method: "POST",
      body: JSON.stringify(boardData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      props.onCreate(data);
    }
  }

  return (
    <Container onSubmit={onSubmit}>
      <GlobalStyle />
      <InputStyle
        placeholder="Create your Board"
        type="text"
        value={boardTitle}
        onChange={handleChange}
      />
      <SubmitButton type="submit">
        <CheckCircleOutlineIcon className="okicon" />
      </SubmitButton>
    </Container>
  );
}
export default BoardCreate;
