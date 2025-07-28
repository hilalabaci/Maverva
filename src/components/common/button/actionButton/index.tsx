import React from "react";
import { BaseButton } from "./styles";

type actionButtonPropsType = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

function ActionButton({
  onClick,
  children,
  variant,
  size,
  ariaLabel,
  type,
}: actionButtonPropsType) {
  return (
    <BaseButton
      onClick={onClick}
      variant={variant}
      size={size}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </BaseButton>
  );
}
export default ActionButton;
