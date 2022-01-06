import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditForm } from 'redux/actions';
import { GetIdReducerTypes, ListReducerTypes } from 'typings';

export const useEditItem = () => {
  const list = useSelector((state: ListReducerTypes) => state.listReducer);
  const getId = useSelector((state: GetIdReducerTypes) => state.getIdReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const item = list.find((item) => item._id === getId);

    if (item) dispatch(setEditForm(item));
  }, [dispatch, getId, list]);
};
