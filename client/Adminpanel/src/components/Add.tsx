import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import sal from "sal.js";
import { addFormState } from "States";
import { Row, Button, MyAddForm, LabelCol, Label, Col20, Input } from "styles";
import { AddItem } from "../functions/AddItem";

const AddComp = () => {
  const [addForm, setAddForm] = useRecoilState(addFormState);

  const typer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    sal();
  }, []);

  return (
    <MyAddForm data-sal="flip-right">
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
  );
};

export default AddComp;
