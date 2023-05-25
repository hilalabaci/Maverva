import React/* , { useState } */ from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Label from "../card-label";
import { Container, NoteWrapper, IconWrapper, LabelWrapper } from "./styles";

function Card(props) {
  /* const [note, setNote] = useState();
  function handleChange(event) {
    const { value } = event.target;
    setNote(value);
  }
  const handleSubmit = async () => {
    const data = { userId: "", note: note };
    const response = await fetch("http://127.0.0.1:3001/notes", {
      method: "POST",
      body: JSON.stringify(data),
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
  };
 */
  return (
    <Container>
      <IconWrapper>
        <MoreHorizIcon sx={{ color: "white" }} />
      </IconWrapper>
      <NoteWrapper>{props.title}</NoteWrapper>
      <LabelWrapper>
        <Label color="#8D4116" />
        <Label color="#14641C" />
      </LabelWrapper>
    </Container>
  );
}
export default Card;
