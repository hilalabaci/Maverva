import React from "react";
import { Container, Title, Wrapper } from "./styles";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { CardType } from "../../../../../types";

type MoveProps = {
  onUpdate: (card: CardType) => void;
  cardId: string;
};
function Move(props: MoveProps) {
  async function updateStatus(status: number) {
    const id = props.cardId;
    const body = { status, id };
    const response = await fetch(process.env.REACT_APP_API_URL + "card", {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = (await response.json()) as CardType;
      props.onUpdate(data);
    }
  }
  return (
    <Container>
      <Wrapper onClick={() => updateStatus(1)}>
        <RestartAltIcon />
        <Title>To Do</Title>
      </Wrapper>
      <Wrapper onClick={() => updateStatus(2)}>
        <RotateRightIcon />
        <Title>In Progress</Title>
      </Wrapper>
      <Wrapper onClick={() => updateStatus(3)}>
        <PublishedWithChangesIcon />
        <Title>Done</Title>
      </Wrapper>
    </Container>
  );
}
export default Move;
