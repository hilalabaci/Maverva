import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";

export const Container = styled.div`
  background: var(--app-bg);
  color: var(--app-ink);
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
export const MainContainer = styled.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  @media ${device.mobile} {
    margin-left: 7px;
  }
`;
export const Breadcrumbs = styled.div`
  padding: 10px 34px 0;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--app-ink-3);
  display: flex;
  align-items: center;
  gap: 8px;
  @media ${device.mobile} {
    padding: 8px 18px 0;
  }
`;