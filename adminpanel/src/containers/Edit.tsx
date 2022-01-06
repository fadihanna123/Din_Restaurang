import EditFoodBtn from 'components/forms/EditFoodBtn';
import { editTyper } from 'functions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col15, EditForm, Input, Label, LabelCol, Row } from 'styles';
import { EditFormReducerTypes } from 'typings';

import { useEditItem } from '../hooks/useEditItem';

const EditComp: React.FC = () => {
  const editForm = useSelector(
    (state: EditFormReducerTypes) => state.editFormReducer
  );

  const dispatch = useDispatch();

  useEditItem();

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              editTyper(e, editForm, dispatch)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              editTyper(e, editForm, dispatch)
            }
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
            value={editForm.price || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              editTyper(e, editForm, dispatch)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              editTyper(e, editForm, dispatch)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              editTyper(e, editForm, dispatch)
            }
          />
        </Col15>
      </Row>
      <EditFoodBtn />
    </EditForm>
  );
};

export default EditComp;
