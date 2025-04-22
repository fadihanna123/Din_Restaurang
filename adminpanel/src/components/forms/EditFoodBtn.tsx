import React from 'react';

// Components
import { EditItem } from '@functions/apiStore';
import useReduxConsts from '@hooks/useReduxConsts';
import { Button } from '@styles/global';

const EditFoodBtn: React.FC = () => {
  const { editForm, list, getId, dispatch } = useReduxConsts();

  return (
    <Button
      type='button'
      onClick={() => EditItem(getId, editForm, list, dispatch)}
    >
      Ändra
    </Button>
  );
};

export default EditFoodBtn;
