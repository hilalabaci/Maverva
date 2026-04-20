import styled, { createGlobalStyle } from "styled-components";
import { device } from "../../styles/breakpoints";

export const GlobalStyle = createGlobalStyle`
  :root {
    --app-bg: #F6F4EF;
    --app-bg-2: #EEEBE3;
    --app-panel: #FBFAF6;
    --app-ink: #16171B;
    --app-ink-2: #3B3D44;
    --app-ink-3: #74767D;
    --app-ink-4: #A4A5AC;
    --app-line: #E2DED3;
    --app-line-2: #D4CFC1;
    --app-card: #FFFFFF;
    --app-accent: #1E2A5E;
    --app-accent-soft: #eef0f7;
    --app-warn: #C2410C;
    --app-ok: #166534;
    --app-info: #1E40AF;
    --app-danger: #B91C1C;
    --app-radius: 6px;
    --app-row-h: 44px;
  }
  #root,
  #root > div {
    height: 100vh;
    overflow: hidden;
  }
  body {
    font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif !important;
    background: var(--app-bg) !important;
    color: var(--app-ink) !important;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "ss01","cv11";
    font-size: 14px;
    line-height: 1.5;
  }
  .mono { font-family: 'Geist Mono', ui-monospace, monospace; }
  .serif { font-family: 'Instrument Serif', serif; font-weight: 400; }
`;

export const Container = styled.div`
  background: var(--app-bg);
  color: var(--app-ink);
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
export const NavbarWrapper = styled.div`
  flex-shrink: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: 0;
`;
export const ProjectMenuAndSideBar = styled.div`
  display: flex;
  flex-direction: row;
`;

type MenuPropsType = {
  $hidden?: boolean;
};
export const Menu = styled.div<MenuPropsType>`
  display: flex;
  width: ${(props) => (props.$hidden ? "50px" : "")};
`;
export const Main = styled.div``;
export const ActiveSprintWrapper = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;
export const BacklogWrapper = styled.div`
  flex: 1;
  min-height: 0;
`;
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
  background: var(--app-bg);
  @media ${device.mobile} {
    margin-left: 7px;
    overflow-x: scroll;
  }
`;
export const MainTitle = styled.div`
  width: 264px;
`;
