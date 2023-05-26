import React from "react";
import { Container, Title, Wrapper } from "./styles";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
function EditCard(props) {
  async function deleteCard() {
    const cardId = props.id;
    const response = await fetch("http://127.0.0.1:3001/card?id=" + cardId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      props.onDelete(cardId);
    }
  }
  return (
    <Container>
      <Wrapper>
        <TrendingFlatIcon />
        <Title>Move</Title>
      </Wrapper>
      <Wrapper onClick={deleteCard}>
        <RemoveCircleOutlineIcon />
        <Title>Delete</Title>
      </Wrapper>
    </Container>
  );
}
export default EditCard;
