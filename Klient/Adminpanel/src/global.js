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

  table, tr, td, th
  {
    border: 1px solid black;
    border-collapse: collapse;
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
