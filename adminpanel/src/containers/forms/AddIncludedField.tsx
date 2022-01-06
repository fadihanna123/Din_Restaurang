import { addTyper } from 'functions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'styles/global';
import { AddFormReducerTypes } from 'typings';

const AddIncludedField: React.FC = () => {
  const addForm = useSelector(
    (state: AddFormReducerTypes) => state.addFormReducer
  );

  const dispatch = useDispatch();

  return (
    <Input
      name="included"
      id="included"
      value={addForm.included}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddIncludedField;
