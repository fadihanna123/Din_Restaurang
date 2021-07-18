import styled from "styled-components";

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
