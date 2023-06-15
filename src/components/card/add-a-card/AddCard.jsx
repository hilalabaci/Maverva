import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  GlobalStyle,
  Button,
  ButtonWrapper,
  Container,
  Textarea,
} from "./styles";
function AddCard(props) {
  const [content, setContent] = useState("");
  function handleChange(event) {
    const { value } = event.target;
    setContent(value);
  }
  async function submitNote(event) {
    event.preventDefault();
    console.log(content);
    const cardData = {
      content: content,
      boardId: props.boardId,
      status: props.status,
    };
    const response = await fetch("http://127.0.0.1:3001/card", {
      method: "POST",
      body: JSON.stringify(cardData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    if (response.status === 400) {
      console.log("Please check your details");
      return;
    }
    console.log(jsonResponse);
    setContent("");
    props.addedCard(jsonResponse);
    props.onClose();
  }
  return (
    <Container>
      <GlobalStyle />
      <Textarea
        name="addCardArea"
        value={content}
        onChange={handleChange}
        id="w3review"
        placeholder="Enter a title for this card..."
        rows="4"
        cols="50"
      ></Textarea>
      <ButtonWrapper>
        <Button onClick={submitNote}>Add card</Button>
        <CloseRoundedIcon onClick={props.onClose} className="iconClose" />
      </ButtonWrapper>
    </Container>
  );
}
export default AddCard;
