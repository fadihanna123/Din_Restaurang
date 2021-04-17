import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Food, IEditForm, Props } from "typings";

const EditComp = ({ setView, getId, list, setList }: Props) => {
  const [form, setForm] = useState<IEditForm>({
    _id: "",
    title: "",
    sorts: "",
    price: 0,
    image: "",
    included: "",
  });

  const typer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const item = list.find((item) => item._id === getId);
    if (item) setForm(item);
  }, [getId, list]);

  const EditItem = async (): Promise<void> => {
    try {
      await axios.put<Food>(`food/${getId}`, form);
      const temp = [...list];
      const index = temp.findIndex((i) => i._id === getId);
      temp[index] = form;
      setList(temp);
      setView && setView("");
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

EditComp.propTypes = {
  setView: PropTypes.string.isRequired,
  getId: PropTypes.string.isRequired,
  setList: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
};

EditComp.defaultProps = {
  setView: "",
  getId: "",
  setList: [],
  list: [],
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
