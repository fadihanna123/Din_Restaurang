import React from 'react';
import { addTyper } from 'functions';
import { useAppDispatch, useAppSelector } from 'redux/app/hooks';
import { getAddForm } from 'redux/reducers';
import { Input } from 'styles/global';

const AddTitleField: React.FC = () => {
  const addForm = useAppSelector(getAddForm);

  const dispatch = useAppDispatch();

  return (
    <Input
      name='title'
      id='title'
      value={addForm.title}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddTitleField;
