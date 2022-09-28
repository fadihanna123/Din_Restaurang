import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/app/hooks';
import { getIdState, getList, setEditForm } from 'redux/reducers';

export const useEditItem = () => {
  const list = useAppSelector(getList);
  const getId = useAppSelector(getIdState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const item = list.find((item) => item.id === getId);

    if (item) {
      dispatch(setEditForm(item));
    }
  }, [dispatch, getId, list]);
};
