import { request } from 'api';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setList } from 'redux/reducers';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Add a food item.
 * @function AddItem
 * @param { AddForm } addForm - Added formdata
 * @param { Food[] } list - Food data
 * @param { Dispatch<any> } dispatch - Set data by dispatch
 * @async
 * @returns Promise
 */
export const AddItem = async (
  addForm: AddForm,
  list: Food[],
  dispatch: Dispatch<any>
): Promise<void> => {
  const endPoint = 'food/add';

  try {
    const { data } = await request.post<Food>(endPoint, addForm);
    dispatch(setList([...list, data]));
  } catch (err) {
    toast.error((err as Error).message);
  }
};
