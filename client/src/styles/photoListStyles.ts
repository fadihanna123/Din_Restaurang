import styled from "styled-components";

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
  width: 15%;
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
