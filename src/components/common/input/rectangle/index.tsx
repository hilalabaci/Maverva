import React from "react";
import {
  Container,
  Inputs,
  WarningMessage,
  Icon,
  EmailIcon,
  InputContainer,
  LabelTitle,
} from "./styles";
type InputPropsType = {
  title: string;
  error?: string | null;
  onChange: (value: string, name: string) => void;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  approved?: boolean;
  labelValue: string;
};
function InputRectangle({
  title,
  error,
  onChange,
  value,
  type,
  name,
  placeholder,
  approved,
  labelValue,
}: InputPropsType) {
  return (
    <Container>
      <LabelTitle htmlFor="email">{labelValue}</LabelTitle>
      <InputContainer
        style={error ? { outline: "1px solid #dc3545" } : undefined}
      >
        {type === "email" ? <EmailIcon /> : ""}

        <Inputs
          onChange={(e) => onChange(e.target.value, e.target.name)}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {type === "password" && approved === true && <Icon />}
      </InputContainer>
      <WarningMessage>{error}</WarningMessage>
    </Container>
  );
}
export default InputRectangle;
