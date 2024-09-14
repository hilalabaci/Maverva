import React, { useState } from "react";
import {
  CloseIcon,
  Button,
  ButtonWrapper,
  Container,
  Textarea,
} from "./styles";
import { useUserContext } from "../../../../contexts/UserContext";
import { CardType } from "../../../../types";
type AddCardPropsType = {
  projectKey: string;
  status: number;
  onClose: () => void;
  addedCard: (card: CardType) => void;
};

function AddCard(props: AddCardPropsType) {
  const [content, setContent] = useState("");
  const { user } = useUserContext();
  const userId = user?._id;
  function handleChange(value: string) {
    setContent(value);
  }
  async function submitNote() {
    const cardData = {
      userId: userId,
      content: content,
      projectKey: props.projectKey,
      status: props.status,
    };
    const response = await fetch(process.env.REACT_APP_API_URL + "card", {
      method: "POST",
      body: JSON.stringify(cardData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = (await response.json()) as CardType;
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
        onChange={(e) => handleChange(e.target.value)}
        id="w3review"
        placeholder="What needs to be done?"
        rows={2}
        cols={50}
      ></Textarea>
      <ButtonWrapper>
        <Button onClick={submitNote}>Create</Button>
      </ButtonWrapper>
    </Container>
  );
}
export default AddCard;
