import { addTyper } from 'functions';
import { FilePicker } from 'styles/global';
import React from 'react';
import useReduxConsts from 'hooks/useReduxConsts';

const AddImageField: React.FC = () => {
  const { addForm, dispatch } = useReduxConsts();

  return (
    <FilePicker
      id='image'
      name='image'
      type='file'
      accept='image/*'
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        addTyper(e, addForm, dispatch)
      }
    />
  );
};

export default AddImageField;
