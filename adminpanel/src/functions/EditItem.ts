import { request } from 'api';
import { Food } from 'models';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'redux/app/hooks';
import {
  getEditForm,
  getIdState,
  getList,
  setList,
  setView,
} from 'redux/reducers';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Edit a food item.
 * @returns Promise
 */

export const EditItem = async (): Promise<void> => {
  const getId = useAppSelector(getIdState);
  const editForm = useAppSelector(getEditForm);
  const list = useAppSelector(getList);

  const dispatch = useAppDispatch();

  const endPoint = `food/${getId}`;

  try {
    await request.put<Food>(endPoint, editForm);

    const temp = [...list];
    const index = temp.findIndex((i: Food) => i.id === getId);
    temp[index] = editForm as Food;
    dispatch(setList(temp));

    dispatch(setView(''));
  } catch (err) {
    toast.error((err as Error).message);
  }
};
