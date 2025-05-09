import React from 'react';

// Components
import { addTyper } from '@functions/helper';
import { Input } from '@styles/global';
import useReduxConsts from '@hooks/useReduxConsts';

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
