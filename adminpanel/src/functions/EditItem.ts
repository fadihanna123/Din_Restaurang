import { request } from 'api';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { setList, setView } from 'redux/reducers';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Edit a food item.
 * @returns Promise
 */

export const EditItem = async (
  getId: string,
  editForm: IEditForm,
  list: Food[],
  dispatch: Dispatch<any>
): Promise<void> => {
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
