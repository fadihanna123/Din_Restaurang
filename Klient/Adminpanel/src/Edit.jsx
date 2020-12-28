import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditComp = ({ setView, getid, list, setList }) => {
  const [form, setForm] = useState({
    title: "",
    sorts: "",
    price: "",
    image: "",
    included: "",
  });

  const typer = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const item = list.find((item) => item._id === getid);
    if (item) setForm(item);
  }, [getid, list]);

  const EditItem = async () => {
    try {
      await axios({
        url: `http://localhost:5000/food/${getid}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      const temp = [...list];
      const index = temp.findIndex((i) => i._id === getid);
      temp[index] = form;
      setList(temp);
      setView("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <EditForm>
        <Row>
          <LabelCol>
            <Label htmlFor="title">Titel:</Label>
          </LabelCol>
          <Col15>
            <Input
              name="title"
              id="title"
              value={form.title}
              onChange={typer}
            />
          </Col15>
        </Row>

        <Row>
          <LabelCol>
            <Label htmlFor="sorts">Sorts:</Label>
          </LabelCol>
          <Col15>
            <Input
              name="sorts"
              id="sorts"
              value={form.sorts}
              onChange={typer}
            />
          </Col15>
        </Row>

        <Row>
          <LabelCol>
            <Label htmlFor="price">Pris:</Label>
          </LabelCol>
          <Col15>
            <Input
              name="price"
              id="price"
              value={form.price}
              onChange={typer}
            />
          </Col15>
        </Row>

        <Row>
          <LabelCol>
            <Label htmlFor="image">Bildfilen:</Label>
          </LabelCol>
          <Col15>
            <Input
              id="image"
              name="image"
              value={form.image}
              onChange={typer}
            />
          </Col15>
        </Row>

        <Row>
          <LabelCol>
            <Label htmlFor="included">Ingår:</Label>
          </LabelCol>
          <Col15>
            <Input
              name="included"
              id="included"
              value={form.included}
              onChange={typer}
            />
          </Col15>
        </Row>
        <Button type="submit" onClick={EditItem}>
          Ändra
        </Button>
      </EditForm>
    </>
  );
};

export default EditComp;

const EditForm = styled.div`
  margin-top: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1900px) {
    flex-direction: column;
  }
`;

const Col15 = styled.div`
  width: 15%;

  @media (max-width: 1900px) {
    width: 95%;
  }
`;

const LabelCol = styled.div`
  width: 10%;

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
