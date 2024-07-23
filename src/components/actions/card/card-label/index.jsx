import React from "react";
import { LabelContainer } from "./styles";
function Label(props) {
  return (
    <LabelContainer
      className="label-container"
      style={{ backgroundColor: props.color }}
    ></LabelContainer>
  );
}
export default Label;
