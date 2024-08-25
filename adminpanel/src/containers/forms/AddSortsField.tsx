import React from 'react';
import { addTyper } from 'functions';
import { Input } from 'styles/global';
import useReduxConsts from 'hooks/useReduxConsts';

const AddSortsField: React.FC = () => {
  const { addForm, dispatch } = useReduxConsts();

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
