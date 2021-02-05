import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  li, a{
    list-style: none;
    text-decoration: none;
  }
  a{
    color: inherit;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  button{
    cursor: pointer;
    outline: none;
  }
`;
 
export default GlobalStyle;