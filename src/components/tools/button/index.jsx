import React from "react";
import { ButtonInput } from "./styles";
function Button(props) {
  return <ButtonInput onClick={props.onClick}>{props.value}</ButtonInput>;
}
export default Button;
