import React from "react";
import styled from "styled-components";

const SuccessWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e2ded3;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 22px;
`;

const SuccessIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(22, 101, 52, 0.14);
  color: #166534;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

const SuccessContent = styled.div`
  flex: 1;
`;

const SuccessTitle = styled.h4`
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: 600;
  color: #16171b;
`;

const SuccessMessage = styled.p`
  margin: 0;
  font-size: 13px;
  color: #3b3d44;
  line-height: 1.4;

  b {
    color: #16171b;
    font-weight: 500;
    font-family: "Geist Mono", monospace;
    font-size: 12.5px;
  }
`;

export interface SuccessBoxProps {
  title: string;
  message: React.ReactNode;
  className?: string;
}

function SuccessBox({ title, message, className }: SuccessBoxProps) {
  return (
    <SuccessWrapper className={className}>
      <SuccessIcon>✓</SuccessIcon>
      <SuccessContent>
        <SuccessTitle>{title}</SuccessTitle>
        <SuccessMessage>{message}</SuccessMessage>
      </SuccessContent>
    </SuccessWrapper>
  );
}

export default SuccessBox;