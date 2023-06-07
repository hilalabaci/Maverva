import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { GlobalStyle, Label, Wrapper } from "./styles";

function BoardLabel(props) {
  return (
    <Wrapper onClick={props.onClick}>
      <GlobalStyle />
      <Label>{props.title}</Label>
      <div>
        
        <DeleteIcon onClick={props.onDelete} className="editicon" />
      </div>
    </Wrapper>
  );
}
export default BoardLabel;
