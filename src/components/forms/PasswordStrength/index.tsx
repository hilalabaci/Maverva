/**
 * PasswordStrength Component
 * 
 * Visual password strength indicator with 4-level strength calculation
 * Provides real-time feedback on password security requirements
 * 
 * Strength Calculation:
 * - Level 1: 8+ characters
 * - Level 2: Mixed case (upper + lower)
 * - Level 3: Contains numbers
 * - Level 4: Contains symbols + 10+ characters
 * 
 * @author Maverva Team
 * @version 1.0.0
 */

import React from "react";
import styled from "styled-components";

const StrengthWrapper = styled.div`
  margin-top: 8px;
`;

const StrengthBars = styled.div<{ $level: number }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  margin-bottom: 6px;

  span {
    height: 3px;
    background: #e2ded3;
    border-radius: 2px;
    transition: background-color 0.15s;
  }

  ${(props) => {
    const { $level } = props;
    if ($level >= 1) {
      return `
        span:nth-child(-n+1) {
          background: #c2410c;
        }
      `;
    }
    return "";
  }}

  ${(props) => {
    const { $level } = props;
    if ($level >= 2) {
      return `
        span:nth-child(-n+2) {
          background: #b45309;
        }
      `;
    }
    return "";
  }}

  ${(props) => {
    const { $level } = props;
    if ($level >= 3) {
      return `
        span:nth-child(-n+3) {
          background: #15803d;
        }
      `;
    }
    return "";
  }}

  ${(props) => {
    const { $level } = props;
    if ($level >= 4) {
      return `
        span {
          background: #166534;
        }
      `;
    }
    return "";
  }}
`;

const StrengthText = styled.div<{ $isStrong: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.$isStrong ? "#166534" : "#74767d")};
  line-height: 1.3;
`;

export interface PasswordStrengthProps {
  password: string;
  className?: string;
}

function PasswordStrength({ password, className }: PasswordStrengthProps) {
  const calculateStrength = (password: string): number => {
    if (!password) return 0;
    
    let score = 0;
    
    // Length requirement
    if (password.length >= 8) score++;
    
    // Mixed case requirement
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    
    // Number requirement
    if (/\d/.test(password)) score++;
    
    // Special character and length requirement
    if (/[^A-Za-z0-9]/.test(password) && password.length >= 10) score++;
    
    return score;
  };

  const getStrengthMessage = (level: number): string => {
    const messages = [
      "Use 10+ characters with a mix of letters, numbers & symbols.",
      "Too weak — add length & variety.",
      "Getting there — add a symbol or number.",
      "Good — one more element to be strong.",
      "Strong password ✓",
    ];
    return messages[level];
  };

  const strength = calculateStrength(password);
  const isStrong = strength === 4;

  if (!password) return null;

  return (
    <StrengthWrapper className={className}>
      <StrengthBars $level={strength}>
        <span />
        <span />
        <span />
        <span />
      </StrengthBars>
      <StrengthText $isStrong={isStrong}>
        {getStrengthMessage(strength)}
      </StrengthText>
    </StrengthWrapper>
  );
}

export default PasswordStrength;