import React from "react";
import {
  Container,
  TextWrapper,
  Inputs,
  WarningMessage,
  InputWrapper,
  Icon,
} from "./styles";
type InputPropsType = {
  title: string;
  error?: string;
  onChange: (value: string, name: string) => void;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  approved?: boolean;
};
function Input(props: InputPropsType) {
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
          onChange={(e) => props.onChange(e.target.value, e.target.name)}
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
