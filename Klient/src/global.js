import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body 
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
  }

  a
  {
    text-decoration: none;
    margin: 10px;
  }

  img
  {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1900px)
  {
    body
    {
      margin: 0;
      padding: 0;
      font-size: 100%;
      width: 100%;
    }

  }

`;
