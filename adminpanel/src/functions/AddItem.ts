import { request } from 'api';
import { Food } from 'models';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAddForm, getList, setList } from 'redux/reducers';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Add a food item.
 *
 * @function AddItem
 * @async
 * @returns { Promise<void> } Promise
 */
export const AddItem = async (): Promise<void> => {
  const addForm = useSelector(getAddForm);
  const list = useSelector(getList);

  const dispatch = useDispatch();

  const endPoint: string = 'food/add';

  try {
    const { data } = await request.post<Food>(endPoint, addForm);
    dispatch(setList([...list, data]));
  } catch (err) {
    toast.error((err as Error).message);
  }
};
