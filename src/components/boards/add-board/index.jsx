import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import BoardCreate from "./added-boards/create";
import BoardList from "./board-list";
import { Container,AddBoardWrapper,IconWrapper,ListWrapper} from "./styles";
function AddBoard() {
  const [key, setKey] = useState(false);
  function handlerClick() {
    setKey(true);
  }
  return (
    <Container >
      <AddBoardWrapper >
        <div>Your Boards</div>
        <IconWrapper onClick={handlerClick}>
          {<AddIcon />}
        </IconWrapper>
      </AddBoardWrapper>
      <div> {key && <BoardCreate />}</div>
      <ListWrapper>
        <BoardList />
      </ListWrapper>
    </Container>
  );
}
export default AddBoard;
