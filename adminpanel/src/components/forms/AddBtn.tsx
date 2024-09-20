import React from 'react';
import { AddItem } from 'functions';
import { Button } from 'styles/global';
import useReduxConsts from 'hooks/useReduxConsts';

const AddBtn: React.FC = () => {
  const { addForm, list, dispatch } = useReduxConsts();

  return (
    <Button type='button' onClick={() => AddItem(addForm, list, dispatch)}>
      Lägg till
    </Button>
  );
};

export default AddBtn;
