import React, { useState } from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: #3b3d44;
  margin-bottom: 22px;
  cursor: pointer;
  line-height: 1.5;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div<{ $checked: boolean }>`
  width: 16px;
  height: 16px;
  border: 1.3px solid #d4cfc1;
  border-radius: 3.5px;
  flex-shrink: 0;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 10px;
  transition: all 0.15s;
  background: ${(props) => (props.$checked ? "#1e2a5e" : "#ffffff")};
  border-color: ${(props) => (props.$checked ? "#1e2a5e" : "#d4cfc1")};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(30, 42, 94, 0.08);
  }

  &::after {
    content: ${(props) => (props.$checked ? '"✓"' : '""')};
    opacity: ${(props) => (props.$checked ? 1 : 0)};
    transition: opacity 0.15s;
  }
`;

const CheckboxText = styled.span`
  a {
    color: #16171b;
    text-decoration: underline;
    text-decoration-color: #d4cfc1;
    text-underline-offset: 3px;

    &:hover {
      text-decoration-color: #1e2a5e;
    }
  }
`;

export interface AuthCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
}

function AuthCheckbox({
  checked = false,
  onChange,
  children,
  className,
  disabled = false,
  name,
}: AuthCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <CheckboxWrapper className={className} onClick={handleChange}>
      <HiddenCheckbox
        checked={isChecked}
        onChange={() => {}} // Handled by wrapper onClick
        disabled={disabled}
        name={name}
      />
      <StyledCheckbox $checked={isChecked} />
      <CheckboxText>{children}</CheckboxText>
    </CheckboxWrapper>
  );
}

export default AuthCheckbox;