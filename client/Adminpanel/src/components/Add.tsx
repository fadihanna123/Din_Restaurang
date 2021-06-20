import axios from "axios";
import React from "react";
import { useRecoilState } from "recoil";
import { addFormState, listState } from "States";
import styled from "styled-components";
import { Food } from "typings";

const AddComp = () => {
  const [addForm, setAddForm] = useRecoilState(addFormState);
  const [list, setList] = useRecoilState(listState);

  const typer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const AddItem = async (): Promise<void> => {
    try {
      const { data } = await axios.post<Food>("food/add", addForm);
      setList([...list, data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <MyAddForm>
        <Row>
          <LabelCol>
            <Label htmlFor="title">Titel:</Label>
          </LabelCol>
          <Col20>
            <Input
              name="title"
              id="title"
              value={addForm.title}
              onChange={typer}
            />
          </Col20>
        </Row>

        <Row>
          <LabelCol>
            <Label htmlFor="sorts">Sorts:</Label>
          </LabelCol>
          <Col20>
            <Input
              name="sorts"
              id="sorts"
              value={addForm.sorts}
              onChange={typer}
            />
          </Col20>
        </Row>

        <Row>
          <LabelCol>
            <Label htmlFor="price">Pris:</Label>
          </LabelCol>
          <Col20>
            <Input
              name="price"
              id="price"
              value={addForm.price}
              onChange={typer}
            />
          </Col20>
        </Row>

        <Row>
          <LabelCol>
            <Label htmlFor="image">Bildfilen:</Label>
          </LabelCol>
          <Col20>
            <Input
              id="image"
              name="image"
              value={addForm.image}
              onChange={typer}
            />
          </Col20>
        </Row>

        <Row>
          <LabelCol>
            <Label htmlFor="included">Ingår:</Label>
          </LabelCol>
          <Col20>
            <Input
              name="included"
              id="included"
              value={addForm.included}
              onChange={typer}
            />
          </Col20>
        </Row>
        <Button type="submit" onClick={AddItem}>
          Lägg till
        </Button>
      </MyAddForm>
    </>
  );
};

export default AddComp;

const MyAddForm = styled.div`
  margin-top: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1900px) {
    flex-direction: column;
  }
`;

const Col20 = styled.div`
  width: 20%;

  @media (max-width: 1900px) {
    width: 95%;
  }
`;

const LabelCol = styled.div`
  width: 15%;

  @media (max-width: 1900px) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
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

const Button = styled.button`
  padding: 10px;
  margin: 10px;
`;
