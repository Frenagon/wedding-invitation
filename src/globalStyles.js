import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    margin: 0px;
  }

  body, div#root {
    height: inherit;
    width: inherit;
    margin: inherit;
  }
`;

export default GlobalStyles;
