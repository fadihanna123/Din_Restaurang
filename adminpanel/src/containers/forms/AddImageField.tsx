import { addTyper } from 'functions';
import { Input } from 'styles/global';
import React from 'react';
import useReduxConsts from 'hooks/useReduxConsts';

const AddImageField: React.FC = () => {
  const { addForm, dispatch } = useReduxConsts();

  return (
    <Input
      id='image'
      name='image'
      value={addForm.image}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddImageField;
