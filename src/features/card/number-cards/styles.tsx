import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--app-bg-2);
  color: var(--app-ink-3);
  @media ${device.mobile} {
    font-size: 11px;
  }
`;
