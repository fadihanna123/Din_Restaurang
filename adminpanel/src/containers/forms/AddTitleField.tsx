import React from 'react';
import { addTyper } from 'functions';
import { Input } from 'styles/global';
import useReduxConsts from 'hooks/useReduxConsts';

const AddTitleField: React.FC = () => {
  const { addForm, dispatch } = useReduxConsts();

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
