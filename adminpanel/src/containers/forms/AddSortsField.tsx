import React from 'react';

// Components
import { addTyper } from '@functions/helper';
import { Input } from '@styles/global';
import useReduxConsts from '@hooks/useReduxConsts';

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
