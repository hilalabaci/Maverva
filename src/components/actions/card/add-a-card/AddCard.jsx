import React, { useState } from "react";
import {
  CloseIcon,
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
    const cardData = {
      content: content,
      boardId: props.boardId,
      status: props.status,
    };
    const response = await fetch(process.env.REACT_APP_API_URL + "card", {
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
    setContent("");
    props.addedCard(jsonResponse);
    props.onClose();
  }
  return (
    <Container>
      <ButtonWrapper>
        <CloseIcon onClick={props.onClose} />
      </ButtonWrapper>
      <Textarea
        name="addCardArea"
        value={content}
        onChange={handleChange}
        id="w3review"
        placeholder="What needs to be done?"
        rows="2"
        cols="50"
      ></Textarea>
      <ButtonWrapper>
        <Button onClick={submitNote}>Create</Button>
      </ButtonWrapper>
    </Container>
  );
}
export default AddCard;
