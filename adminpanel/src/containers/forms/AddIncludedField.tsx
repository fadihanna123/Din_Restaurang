import { addTyper } from 'functions';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAddForm } from '../../redux/reducers';
import { Input } from 'styles/global';

const AddIncludedField: React.FC = () => {
  const addForm = useAppSelector(getAddForm);

  const dispatch = useAppDispatch();

  return (
    <Input
      name='included'
      id='included'
      value={addForm.included}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddIncludedField;
