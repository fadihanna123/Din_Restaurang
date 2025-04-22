import React from 'react';

// Components
import { addTyper } from '@functions/helper';
import { FilePicker } from '@styles/global';
import useReduxConsts from '@hooks/useReduxConsts';

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
