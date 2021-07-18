import styled from "styled-components";

export const Col = styled.section`
  float: left;
  width: 100%;
  background: #dadada;

  @media (max-width: 1900px) {
    width: 100%;
  }
`;

export const MainTable = styled.div`
  padding: 10px;
  font-size: 16px;
  text-align: center;
  margin-top: 80px;

  a {
    text-decoration: none;
    padding: 10px;
  }

  @media (max-width: 1900px) {
    a {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const DataTable = styled.table`
  padding: 10px;
  width: 100%;

  td {
    padding: 5px;
    width: 700px;
  }
`;

export const TableHead = styled.thead`
  background-color: black;
  color: white;
`;
