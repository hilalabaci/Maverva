import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Container,
  Header,
  Title,
  CloseIcon,
  Content,
} from "../../card/edit-card/edit-label/styles";

function CloseBoardMenu() {
 
  return (
    <Container>
      <Header>
        <Title>Close board?</Title>
        <CloseIcon onClick={props.onClose} />
      </Header>
      <Content></Content>
    </Container>
  );
}
export default CloseBoardMenu;
