import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  ButtonWrapper,
  DeleteButton,
  BoardTitle,
  Close,
} from "./styles";

function CloseBoardMenu(props) {
  const boardName = props.boardName;
  return (
    <Container>
      <Header>
        <Title>Close board?</Title>
        <Close onClick={props.onClose} />
      </Header>
      <Content>
        Are you sure you want to close card <BoardTitle>{boardName}</BoardTitle>{" "}
        ,all your cards belonging to card <BoardTitle>{boardName}</BoardTitle>{" "}
        will be deleted in it?
      </Content>
      <ButtonWrapper>
        <DeleteButton onClick={props.onDelete}>Close</DeleteButton>
      </ButtonWrapper>
    </Container>
  );
}
export default CloseBoardMenu;
