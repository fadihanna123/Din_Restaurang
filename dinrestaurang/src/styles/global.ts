import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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

export const Row = styled.section`
  margin: 0 10px 0 10px;
  overflow: hidden;
  display: flex;

  @media (max-width: 1900px) {
    flex-direction: column;
  }
`;

export const Col = styled.section`
  float: left;
  width: 20%;
  padding: 10px;

  @media (max-width: 1900px) {
    width: 100%;
  }
`;

export const Loading = styled.p`
  position: absolute;
  top: 50%;
  left: 40%;

  @media (max-width: 1900px) {
    position: relative;
    top: -50px;
    left: 0;
    text-align: center;
  }
`;

export const ErrorData = styled.section`
  position: absolute;
  top: 50%;
  left: 37%;
  color: red;

  @media (max-width: 1900px) {
    position: relative;
    top: -50px;
    left: 0;
    text-align: center;
  }
`;
