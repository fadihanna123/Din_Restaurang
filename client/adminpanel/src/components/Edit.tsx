import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { editFormState, getIdState, listState } from "states";
import { EditForm, Row, LabelCol, Label, Col15, Input, Button } from "styles";
import { EditItem } from "../functions/EditItem";

const EditComp = () => {
  const [editForm, setEditForm] = useRecoilState(editFormState);
  const [list] = useRecoilState(listState);
  const [getId] = useRecoilState(getIdState);

  const typer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const item = list.find((item: any) => item._id === getId);
    if (item) setEditForm(item);
  }, [getId, list, setEditForm]);

  return (
    <EditForm>
      <Row>
        <LabelCol>
          <Label htmlFor="title">Titel:</Label>
        </LabelCol>
        <Col15>
          <Input
            name="title"
            id="title"
            value={editForm.title}
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
            value={editForm.sorts}
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
            value={editForm.price}
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
            value={editForm.image}
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
            value={editForm.included}
            onChange={typer}
          />
        </Col15>
      </Row>
      <Button type="submit" onClick={EditItem}>
        Ändra
      </Button>
    </EditForm>
  );
};

export default EditComp;
