import {createGlobalStyle} from "styled-components";
import {InitialStyle} from "./InitialStyle";
import {FontStyle} from "./Font";

export const GlobalStyle = createGlobalStyle`
  ${InitialStyle}

  ;
  ${FontStyle}
  *, *::before, *::after {
    font-family: 'SUIT Variable', sans-serif;
  }

  *::selection {
    background-color: rgba(88, 111, 233, 0.15);
  }

  body {
    min-width: 320px;
    background-color: ${p => p.theme.color.Gray3};
  }

  button, input {
    background: none;
    color: inherit;
    border: none;
    cursor: pointer;
    outline: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input:focus {
    outline: none;
  }
`