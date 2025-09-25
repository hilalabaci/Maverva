import React from "react";
import { BaseButton } from "./styles";
import borderRadius from "../../../../theme/tokens/borderRadius";

type actionButtonPropsType = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "warning";
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fontSize?: "sm" | "md" | "lg";
  borderRadius?: keyof typeof borderRadius;
};

function ActionButton({
  onClick,
  children,
  variant,
  size,
  ariaLabel,
  type,
  disabled = false,
  fontSize,
  borderRadius,
}: actionButtonPropsType) {
  return (
    <BaseButton
      onClick={onClick}
      variant={variant}
      size={size}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      {children}
    </BaseButton>
  );
}
export default ActionButton;
