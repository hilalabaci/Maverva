import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Container,
  Content,
  Title,
  Wrapper,
  Header,
  CheckboxWrapper,
  Label,
} from "./styles";
import Checkbox from "../../../checkbox";

function EditLabel(props) {
  const colours = ["#216e4e", "#7f5f01", "#974f0c", "#ae2a19", "#5e4db2"];
  async function handleClick(colour) {
    const labelData = {
      colour: colour,
      cardId: props.cardId,
    };
    const response = await fetch("http://127.0.0.1:3001/label", {
      method: "POST",
      body: JSON.stringify(labelData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 400) {
      console.log("Please check your details");
      return;
    }
    if (response.ok) {
      const jsonResponse = await response.json();
      props.onUpdate(props.cardId, jsonResponse);
    }
  }
  return (
    <Container>
      <Header>
        <Title>Labels</Title>
        <CloseIcon onClick={props.onClose} />
      </Header>
      <Content>
        {colours.map((colour, index) => {
          console.log(
            colour,
            props.labels,
            props.labels.some((label) => label.colour === colour)
          );
          return (
            <Wrapper
              key={index}
              onClick={() => {
                handleClick(colour);
              }}
            >
              <CheckboxWrapper>
                <Checkbox
                  check={props.labels.some((label) => label.colour === colour)}
                />
              </CheckboxWrapper>
              <Label colourLabel={colour} />
            </Wrapper>
          );
        })}
      </Content>
    </Container>
  );
}
export default EditLabel;
