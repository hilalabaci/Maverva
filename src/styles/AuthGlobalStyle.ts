import { createGlobalStyle } from "styled-components";

export const AuthGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');
  
  :root {
    --bg: #F6F4EF;
    --bg-2: #EEEBE3;
    --panel: #FBFAF6;
    --ink: #16171B;
    --ink-2: #3B3D44;
    --ink-3: #74767D;
    --ink-4: #A4A5AC;
    --line: #E2DED3;
    --line-2: #D4CFC1;
    --card: #FFFFFF;
    --accent: #1E2A5E;
    --accent-soft: rgba(30, 42, 94, 0.08);
    --warn: #C2410C;
    --ok: #166534;
    --danger: #B91C1C;
    --radius: 6px;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    background: var(--bg);
    color: var(--ink);
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "ss01", "cv11";
    font-size: 14px;
    line-height: 1.5;
    min-height: 100%;
  }

  .mono {
    font-family: 'Geist Mono', ui-monospace, monospace;
  }

  .serif {
    font-family: 'Instrument Serif', serif;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: 0;
    background: none;
    color: inherit;
  }
`;