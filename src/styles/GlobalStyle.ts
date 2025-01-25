import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* font type */
  @font-face {
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  src: local("Inter"),
    url(../public/fonts/Inter/static/Inter-Light.ttf) format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  src: local("Inter"),
    url(../public/fonts/Inter/static/Inter-Regular.ttf) format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  src: local("Inter"),
    url(../public/fonts/Inter/static/Inter-Medium.ttf) format("truetype");
  font-weight: 500;
}
@font-face {
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  src: local("Inter"),
    url(../public/fonts/Inter/static/Inter-SemiBold.ttf) format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  src: local("Inter"),
    url(../public/fonts/Inter/static/Inter-Bold.ttf) format("truetype");
  font-weight: 700;
}
  /* Global Body styling */
  body {
    margin: 0;
    padding: 0;
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-color:transparent;
    color: #212529;
  }

  /* other styling */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }
`;
