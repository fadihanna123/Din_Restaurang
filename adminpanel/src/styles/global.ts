import styled, { createGlobalStyle } from 'styled-components';

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

export const MyAddForm = styled.div`
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1900px) {
    flex-direction: column;
  }
`;

export const Col20 = styled.div`
  width: 20%;

  @media (max-width: 1900px) {
    width: 95%;
  }
`;

export const LabelCol = styled.div`
  width: 15%;

  @media (max-width: 1900px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #0275d8;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;
    outline: 0 none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
`;

export const EditForm = styled.div`
  margin-top: 20px;
`;

export const Col15 = styled.div`
  width: 15%;

  @media (max-width: 1900px) {
    width: 95%;
  }
`;

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
