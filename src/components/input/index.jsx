import React from "react";
import {
  Container,
  TextWrapper,
  Inputs,
  WarningMessage,
  InputWrapper,
  Icon,
} from "./styles";
function Input(props) {
  return (
    <Container>
      <TextWrapper>{props.title}</TextWrapper>
      <InputWrapper
        style={
          props.error !== undefined
            ? { border: "2px solid #dc3545" }
            : undefined
        }
      >
        <Inputs
          onChange={props.onChange}
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
        {props.type === "password" && props.approved === true && <Icon />}
      </InputWrapper>

      {props.error && <WarningMessage>{props.error}</WarningMessage>}
    </Container>
  );
}
export default Input;
