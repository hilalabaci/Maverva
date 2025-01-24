import React from "react";
import {
  Container,
  Inputs,
  WarningMessage,
  Icon,
  EmailIcon,
  InputContainer,
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
      <InputContainer
        style={
          props.error !== undefined
            ? { outline: "1px solid #dc3545" }
            : undefined
        }
      >
        {props.type === "email" ? <EmailIcon /> : ""}

        <Inputs
          onChange={(e) => props.onChange(e.target.value, e.target.name)}
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
        {props.type === "password" && props.approved === true && <Icon />}
      </InputContainer>
      <WarningMessage>{props.error}</WarningMessage>
    </Container>
  );
}
export default Input;
