import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap');
/* reset */

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

 
  h1, h2, h3, h4, h5, h6,p, ul,ol {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin: 1em 0;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  div {
    text-align: center;
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: unset;
  }
  ul {
    margin-left: 1.5rem;
    list-style: none;
  }
  button, 
  input[type=submit]{
    border: none';
    background: none;
    color: unset;
    cursor: pointer;

  }
  /*Header*/
  #header{
    background-color: ${({ theme }) => theme.primaryDark};
    display: flex;
  }
  #header .title{
    margin: 0;
    color: yellow;
  }
`;
