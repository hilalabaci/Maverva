import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Container, InputStyle, GlobalStyle, SubmitButton } from "./styles";

function BoardCreate() {
  const [boardTitle, setBoardTitle] = useState("");

  function HandlerChange(event) {
    const { value } = event.target;
    setBoardTitle(value)
  }
  async function onSubmit(event) {
    event.preventDefault();
    const boardData = { title: boardTitle, userId: "645d1cd8039320f78d51f4a7" };
    const response = await fetch("http://127.0.0.1:3001/board", {
      method: "POST",
      body: JSON.stringify(boardData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  }

  return (
    <Container onSubmit={onSubmit}>
      <GlobalStyle />
      <InputStyle
        placeholder="Create your Board"
        type="text"
        value={boardTitle}
        onChange={HandlerChange}
      />
      <SubmitButton type="submit">
        <CheckCircleOutlineIcon className="okicon" />
      </SubmitButton>
    </Container>
  );
}
export default BoardCreate;
