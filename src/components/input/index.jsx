import React from "react";
import { Container, TextWrapper, Inputs, WarningMessage } from "./styles";
function Input(props) {
  return (
    <Container>
      <TextWrapper>{props.title}</TextWrapper>
      <Inputs
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        style={
          props.error !== undefined
            ? { border: "2px solid #dc3545" }
            : undefined
        }
      />
      <WarningMessage>{props.error}</WarningMessage>
    </Container>
  );
}
export default Input;
