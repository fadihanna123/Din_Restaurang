import { EditItem } from 'functions';
import useReduxConsts from 'hooks/useReduxConsts';
import React from 'react';
import { Button } from 'styles';

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
