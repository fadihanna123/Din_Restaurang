import React from 'react';

// Components
import { addTyper } from '@functions/helper';
import useReduxConsts from '@hooks/useReduxConsts';
import { Input } from '@styles/global';

const AddIncludedField: React.FC = () => {
  const { addForm, dispatch } = useReduxConsts();

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
