import { EditItem } from 'functions';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/app/hooks';
import { getEditForm, getIdState, getList } from 'redux/reducers';
import { Button } from 'styles';

const EditFoodBtn: React.FC = () => {
  const getId = useAppSelector(getIdState);
  const editForm = useAppSelector(getEditForm);
  const list = useAppSelector(getList);

  const dispatch = useAppDispatch();

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
