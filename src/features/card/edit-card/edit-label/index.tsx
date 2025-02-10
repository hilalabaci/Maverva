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

import Checkbox from "../../../../components/forms/checkbox";
import { IssueType, LabelType } from "../../../../types";
type EditLabelProps = {
  onUpdate: (card: IssueType) => void;
  cardId: string;
  onClose: () => void;
  labels: LabelType[];
};

function EditLabel(props: EditLabelProps) {
  const colours = ["#216e4e", "#7f5f01", "#974f0c", "#ae2a19", "#5e4db2"];

  async function handleClick(colour: string, isChecked: boolean) {
    const labelData = {
      colour: colour,
      cardId: props.cardId,
      add: isChecked === false,
    };
    const response = await fetch(process.env.REACT_APP_API_URL + "label", {
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
      const jsonResponse = (await response.json()) as IssueType;
      props.onUpdate(jsonResponse);
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
          return (
            <Wrapper
              key={index}
              onClick={() => {
                const isChecked = props.labels.some(
                  (label) => label.colour === colour
                );
                handleClick(colour, isChecked);
              }}
            >
              <CheckboxWrapper>
                <Checkbox
                  check={props.labels.some((label) => label.colour === colour)}
                />
              </CheckboxWrapper>
              <Label colour={colour} />
            </Wrapper>
          );
        })}
      </Content>
    </Container>
  );
}
export default EditLabel;
