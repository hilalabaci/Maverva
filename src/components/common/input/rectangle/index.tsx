import React, { Children } from "react";
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
  error?: string | null;
  onChange?: (value: string) => void;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  approved?: boolean;
  labelValue: string;
  specialBackground?: boolean;
  size?: number;
  children?: React.ReactNode;
};
function InputRectangle({
  error,
  onChange,
  value,
  type,
  name,
  placeholder,
  approved,
  labelValue,
  specialBackground,
  size,
  children,
}: InputPropsType) {
  return (
    <Container>
      <LabelTitle htmlFor="email">{labelValue}</LabelTitle>
      <InputContainer
        isSpecialBackground={specialBackground}
        style={error ? { outline: "1px solid #dc3545" } : undefined}
      >
        {type === "email" ? <EmailIcon /> : ""}
        {children && <div>{children}</div>}
        <Inputs
          onChange={(e) => onChange && onChange(e.target.value)}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          size={size}
        />

        {type === "password" && approved === true && <Icon />}
      </InputContainer>
      <WarningMessage>{error}</WarningMessage>
    </Container>
  );
}
export default InputRectangle;
