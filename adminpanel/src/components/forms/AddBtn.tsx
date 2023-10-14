import React from 'react';
import { AddItem } from 'functions';
import { Button } from 'styles/global';
import { useDispatch, useSelector } from 'react-redux';
import { getAddForm, getList } from 'redux/reducers';

const AddBtn: React.FC = () => {
  const addForm = useSelector(getAddForm);
  const list = useSelector(getList);

  const dispatch = useDispatch();

  return (
    <Button type='submit' onClick={() => AddItem(addForm, list, dispatch)}>
      Lägg till
    </Button>
  );
};

export default AddBtn;
