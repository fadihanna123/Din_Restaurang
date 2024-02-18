import React from 'react';
import { addTyper } from 'functions';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { getAddForm } from '../../redux/reducers';
import { Input } from 'styles/global';

const AddSortsField: React.FC = () => {
  const addForm = useAppSelector(getAddForm);

  const dispatch = useAppDispatch();

  return (
    <Input
      name='sorts'
      id='sorts'
      value={addForm.sorts}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddSortsField;
