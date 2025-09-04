import React, { useState } from "react";
import {
  Container,
  Inputs,
  WarningMessage,
  EmailIcon,
  InputContainer,
  PasswordIcon,
  PasswordIconButton,
  LabelforInput,
  InfoMessage,
} from "./styles";
type InputPropsType = {
  error?: string | null;
  onChange: (value: string, name: string) => void;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  approved?: boolean;
  label?: string;
  infoMessage?: string;
};
function Input({
  error,
  onChange,
  value,
  type = "text",
  name,
  placeholder,
  approved,
  label,
  infoMessage,
}: InputPropsType) {
  const [showPassword, setShowPassword] = useState(false);
  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <Container>
      {label && <LabelforInput>{label}</LabelforInput>}
      <InputContainer
        style={error ? { outline: "1px solid #dc3545" } : undefined}
      >
        {type === "email" ? <EmailIcon /> : ""}
        <Inputs
          onChange={(e) => onChange(e.target.value, e.target.name)}
          value={value}
          type={inputType}
          name={name}
          placeholder={placeholder}
        />
        {type === "password" && (
          <PasswordIconButton type="button" onClick={togglePasswordVisibility}>
            <PasswordIcon />
          </PasswordIconButton>
        )}
        {/* {type === "password" && approved === true && <Icon />} */}
      </InputContainer>
      {infoMessage && <InfoMessage>{infoMessage}</InfoMessage>}
      {error && <WarningMessage>{error}</WarningMessage>}
    </Container>
  );
}
export default Input;
