/**
 * AuthInput Component
 * 
 * Smart input component with integrated icons, validation states,
 * password toggle functionality, and proper accessibility
 * Supports email, password, text, and name input types
 * 
 * Features:
 * - Icon integration based on input type
 * - Password show/hide toggle
 * - Focus and error states
 * - Validation error display
 * 
 * @author Maverva Team
 * @version 1.0.0
 */

import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div<{
  $isFocused: boolean;
  $hasError: boolean;
  $isSuccess: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid
    ${(props) =>
      props.$hasError
        ? "#b91c1c"
        : props.$isSuccess
        ? "#166534"
        : props.$isFocused
        ? "#1e2a5e"
        : "#e2ded3"};
  border-radius: 6px;
  padding: 0 12px;
  height: 46px;
  transition: border-color 0.15s, box-shadow 0.15s;
  box-shadow: ${(props) =>
    props.$isFocused ? "0 0 0 3px rgba(30, 42, 94, 0.08)" : "none"};
`;

const StyledInput = styled.input`
  flex: 1;
  border: 0;
  background: none;
  outline: 0;
  font: inherit;
  color: #16171b;
  height: 100%;
  letter-spacing: -0.005em;

  &::placeholder {
    color: #a4a5ac;
  }
`;

const IconWrapper = styled.span`
  color: #74767d;
  font-size: 14px;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ShowHideButton = styled.button`
  font-family: "Geist Mono", monospace;
  font-size: 11px;
  color: #74767d;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 3px;
  background: none;
  border: none;
  transition: background-color 0.15s, color 0.15s;

  &:hover {
    background: #eeebe3;
    color: #16171b;
  }
`;

const ErrorText = styled.div`
  font-size: 12px;
  color: #b91c1c;
  margin-top: 6px;
`;

// Icons
const EmailIcon = () => (
  <IconWrapper>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 8l7.89 4.26c.67.36 1.47.36 2.14 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrapper>
);

const LockIcon = () => (
  <IconWrapper>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
      <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </IconWrapper>
);

const UserIcon = () => (
  <IconWrapper>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </IconWrapper>
);

export type AuthInputType = "email" | "password" | "text" | "name";

export interface AuthInputProps {
  type?: AuthInputType;
  placeholder?: string;
  value: string;
  onChange: (value: string, name: string) => void;
  name: string;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  className?: string;
}

function AuthInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
  disabled = false,
  readOnly = false,
  autoComplete,
  className,
}: AuthInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputType = 
    type === "password" 
      ? (showPassword ? "text" : "password")
      : type;

  const renderIcon = () => {
    switch (type) {
      case "email":
        return <EmailIcon />;
      case "password":
        return <LockIcon />;
      case "name":
        return <UserIcon />;
      default:
        return null;
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={className}>
      <InputWrapper
        $isFocused={isFocused}
        $hasError={!!error}
        $isSuccess={false}
      >
        {renderIcon()}
        <StyledInput
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value, name)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          name={name}
        />
        {type === "password" && (
          <ShowHideButton
            type="button"
            onClick={handleTogglePassword}
            tabIndex={-1}
          >
            {showPassword ? "Hide" : "Show"}
          </ShowHideButton>
        )}
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

export default AuthInput;