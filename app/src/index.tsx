import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import Root from "./components/Root";

// CREATES GLOBAL STYLE FOR OUR COMPONENTS
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500&display=swap');
  body {
    font-family: Roboto, sans-serif;
  }
`;



render(
  <>
    <GlobalStyle />
    <Root />
  </>,
 document.getElementById("app"));
