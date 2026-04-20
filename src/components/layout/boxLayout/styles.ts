import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const MainContainer = styled.div`
  background: #F6F4EF;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;

  @media ${device.mobile} {
    align-items: flex-start;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 40px 20px;

  @media ${device.mobile} {
    padding: 60px 20px 40px;
  }
`;

export const BoxContainer = styled.div`
  background: #ffffff;
  border: 1px solid #E2DED3;
  border-radius: 8px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02), 0 20px 40px -20px rgba(22, 23, 27, 0.10);
  padding: 36px 40px;
  box-sizing: border-box;

  @media ${device.mobile} {
    padding: 28px 24px;
    border-radius: 8px;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-bottom: 28px;
`;

export const BrandMark = styled.span`
  width: 22px;
  height: 22px;
  position: relative;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid #16171B;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid transparent;
    border-top-color: #16171B;
    border-left-color: #16171B;
    border-radius: 50%;
    transform: rotate(45deg);
  }
`;

export const BrandDot = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  background: #16171B;
  border-radius: 50%;
  top: 8.5px;
  left: 8.5px;
`;

export const BrandName = styled.span`
  font-family: 'Geist', sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #16171B;
`;

export const SectionofBox = styled.section``;
