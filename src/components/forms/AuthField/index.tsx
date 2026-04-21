import React from "react";
import styled from "styled-components";

const FieldWrapper = styled.div`
  margin-bottom: 18px;
`;

const FieldLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  color: #3b3d44;
  margin-bottom: 7px;
  letter-spacing: -0.005em;
`;

const FieldLabelText = styled.span`
  color: #3b3d44;
`;

const FieldLabelAction = styled.button`
  font-size: 12px;
  color: #74767d;
  font-weight: 400;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;

  &:hover {
    color: #1e2a5e;
  }
`;

const HintWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  color: #74767d;

  &.ok {
    color: #166534;
  }
`;

const HintText = styled.span`
  &.ok {
    color: #166534;
  }
`;

export interface AuthFieldProps {
  children: React.ReactNode;
  label?: string;
  labelAction?: {
    text: string;
    onClick: () => void;
  };
  hint?: string;
  hintRight?: string;
  isValid?: boolean;
  className?: string;
}

function AuthField({
  children,
  label,
  labelAction,
  hint,
  hintRight,
  isValid = false,
  className,
}: AuthFieldProps) {
  return (
    <FieldWrapper className={className}>
      {label && (
        <FieldLabel>
          <FieldLabelText>{label}</FieldLabelText>
          {labelAction && (
            <FieldLabelAction onClick={labelAction.onClick}>
              {labelAction.text}
            </FieldLabelAction>
          )}
        </FieldLabel>
      )}
      {children}
      {(hint || hintRight) && (
        <HintWrapper className={isValid ? "ok" : ""}>
          <HintText className={isValid ? "ok" : ""}>{hint}</HintText>
          {hintRight && <span>{hintRight}</span>}
        </HintWrapper>
      )}
    </FieldWrapper>
  );
}

export default AuthField;