import React, { useState } from "react";
import {
  Container,
  Inputs,
  WarningMessage,
  EmailIcon,
  InputContainer,
  PasswordIcon,
  IconButton,
  LabelforInput,
  InfoMessage,
  PasswordIconHidden,
  EditIcon,
} from "./styles";
type InputPropsType = {
  error?: string | null;
  onChange: (value: string, name: string) => void;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  label?: string;
  infoMessage?: string;
  filled?: boolean;
  onEditClick?: () => void;
  fontColour?: "Dark" | "Light";
  borderRadius?: keyof typeof import("../../../../theme/tokens/borderRadius").default;
};
function Input({
  error,
  onChange,
  value,
  type = "text",
  name,
  placeholder,
  label,
  infoMessage,
  filled = false,
  onEditClick,
  fontColour = "Dark",
  borderRadius,
}: InputPropsType) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <Container>
      {label && <LabelforInput fontColour={fontColour}>{label}</LabelforInput>}
      <InputContainer
        error={!!error}
        filled={filled}
        borderRadius={borderRadius}
      >
        {type === "email" ? <EmailIcon /> : ""}
        <Inputs
          onChange={(e) => onChange(e.target.value, e.target.name)}
          value={value}
          type={inputType}
          name={name}
          placeholder={placeholder}
          filled={filled}
          readOnly={filled}
        />
        {type === "password" && (
          <IconButton type="button" onClick={togglePasswordVisibility}>
            {showPassword ? <PasswordIconHidden /> : <PasswordIcon />}
          </IconButton>
        )}
        {filled && (
          <IconButton type="button" onClick={onEditClick}>
            <EditIcon />
          </IconButton>
        )}
      </InputContainer>
      {infoMessage && <InfoMessage>{infoMessage}</InfoMessage>}
      {error && <WarningMessage>{error}</WarningMessage>}
    </Container>
  );
}
export default Input;
