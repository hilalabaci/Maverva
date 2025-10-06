import React from "react";
import { BaseButtonStyledComponent } from "./styles";
import borderRadius from "../../../../theme/tokens/borderRadius";

type BaseButtonPropsType = {
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

function BaseButton({
  onClick,
  children,
  variant,
  size,
  ariaLabel,
  type,
  disabled = false,
  fontSize,
  borderRadius,
}: BaseButtonPropsType) {
  return (
    <BaseButtonStyledComponent
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
    </BaseButtonStyledComponent>
  );
}
export default BaseButton;
