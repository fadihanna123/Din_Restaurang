import React from 'react';
import { addTyper } from 'functions';
import { Input } from 'styles/global';
import useReduxConsts from 'hooks/useReduxConsts';

const AddPriceField: React.FC = () => {
  const { addForm, dispatch } = useReduxConsts();

  return (
    <Input
      name='price'
      id='price'
      value={addForm.price || 0}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddPriceField;
