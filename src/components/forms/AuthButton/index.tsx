/**
 * AuthButton Component
 * 
 * Reusable button component for authentication flows
 * Supports three variants: primary, secondary, and social
 * Includes loading states, hover effects, and arrow animations
 * 
 * @author Maverva Team
 * @version 1.0.0
 */

import React from "react";
import styled from "styled-components";

// Base button component with variant, size and width support
const BaseButton = styled.button<{
  $variant: "primary" | "secondary" | "social";
  $fullWidth?: boolean;
  $size?: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.005em;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  
  /* Size variants */
  ${(props) => {
    switch (props.$size) {
      case "sm":
        return "padding: 0 12px; height: 38px;";
      case "lg":
        return "padding: 0 18px; height: 46px;";
      default:
        return "padding: 0 16px; height: 42px;";
    }
  }}

  /* Variant styles */
  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return `
          background: #16171b;
          color: #f6f4ef;
          border: 1px solid #16171b;

          &:hover:not(:disabled) {
            background: #1e2a5e;
            border-color: #1e2a5e;
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        `;
      case "secondary":
        return `
          background: #ffffff;
          color: #16171b;
          border: 1px solid #d4cfc1;

          &:hover:not(:disabled) {
            border-color: #16171b;
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        `;
      case "social":
        return `
          background: #ffffff;
          color: #16171b;
          border: 1px solid #d4cfc1;

          &:hover:not(:disabled) {
            border-color: #16171b;
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        `;
      default:
        return "";
    }
  }}
`;

const ArrowIcon = styled.span<{ $isHovered?: boolean }>`
  transition: transform 0.15s;
  transform: ${(props) => (props.$isHovered ? "translateX(3px)" : "none")};
`;

const SocialIcon = styled.span`
  font-family: "Geist Mono", monospace;
  font-size: 13px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export interface AuthButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "social";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
  hasArrow?: boolean;
}

function AuthButton({
  children,
  variant = "primary",
  fullWidth = false,
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className,
  icon,
  hasArrow = false,
}: AuthButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <BaseButton
      $variant={variant}
      $fullWidth={fullWidth}
      $size={size}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        variant === "social" ? (
          <SocialIcon>{icon}</SocialIcon>
        ) : (
          <span>{icon}</span>
        )
      )}
      {loading ? "..." : children}
      {hasArrow && variant === "primary" && (
        <ArrowIcon $isHovered={isHovered}>→</ArrowIcon>
      )}
    </BaseButton>
  );
}

export default AuthButton;