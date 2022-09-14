import { request } from 'api';
import { Food } from 'models';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setList, setLoading } from 'redux/actions';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Delete a food item.
 *
 * @param id - String
 * @param list - Food list
 * @param dispatch - Dispatch
 * @returns Promise
 */

export const DeleteItem = async (
  id: string,
  list: Food[],
  dispatch: Dispatch<any>
): Promise<void> => {
  try {
    const endPoint = `food/${id}`;

    dispatch(setLoading(true));

    await request.delete<Food>(endPoint);
    const temp = [...list].filter((item) => item.id !== id);
    dispatch(setList(temp));
  } catch (err) {
    toast.error((err as Error).message);
  } finally {
    dispatch(setLoading(false));
  }
};
