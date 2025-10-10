import React, { RefObject } from 'react';
import { AddItem } from '@functions/apiStore';
import { Button } from '@styles/global';
import useReduxConsts from '@hooks/useReduxConsts';

const AddBtn: React.FC<{
  addBtnForm: RefObject<HTMLFormElement | null>;
}> = ({ addBtnForm }: { addBtnForm: RefObject<HTMLFormElement | null> }) => {
  const { addForm, list, dispatch } = useReduxConsts();

  return (
    <Button
      type='button'
      onClick={() => AddItem(addForm, list, addBtnForm, dispatch)}
    >
      Lägg till
    </Button>
  );
};

export default AddBtn;
