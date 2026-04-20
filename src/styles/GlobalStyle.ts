import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "ss01", "cv11";
  }

  h1 {
    font-family: 'Instrument Serif', serif;
    font-weight: 400;
    letter-spacing: -0.022em;
  }

  h2, h3, h4 {
    font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  h5, h6 {
    font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    font-weight: 500;
  }

  code, pre, .mono {
    font-family: 'Geist Mono', ui-monospace, monospace;
  }

  button {
    font-family: inherit;
  }
`;
