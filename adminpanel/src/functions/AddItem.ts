import { request } from 'api';
import { AddFormReducerTypes, Food, ListReducerTypes } from 'models';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setList } from 'redux/actions';

export const AddItem = async (): Promise<void> => {
  const addForm = useSelector(
    (state: AddFormReducerTypes) => state.addFormReducer
  );
  const list = useSelector(
    (state: ListReducerTypes) => state.listReducer
  );

  const dispatch = useDispatch();

  const endPoint: string = 'food/add';

  try {
    const { data } = await request.post<Food>(endPoint, addForm);
    dispatch(setList([...list, data]));
  } catch (err) {
    toast.error((err as Error).message);
  }
};
