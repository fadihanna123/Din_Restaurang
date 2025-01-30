import { request } from 'api';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setList, setLoading, setView } from '../redux/reducers';
import { setError } from '../redux/reducers/error';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all food items.
 * @param { Dispatch<any> } dispatch - Dispatch
 * @param { boolean } mounted - Mounted
 * @returns { Promise<void> } - Promise
 */
export const getData = async (
  dispatch: Dispatch<any>,
  mounted: boolean
): Promise<void> => {
  try {
    const endPoint: Paths = 'food';

    dispatch(setLoading(true));

    const { data } = await request.get<Food[]>(endPoint);
    if (mounted) {
      dispatch(setList(data));
    }
  } catch (err) {
    if ((err as { code: string }).code === 'ERR_NETWORK') {
      toast.error("Servern does't respond", {
        toastId: 'fetchError',
      });
      dispatch(setError((err as Error).message));
    } else {
      toast.error((err as Error).message, {
        toastId: 'fetchError',
      });
    }
  } finally {
    dispatch(setLoading(false));
  }
};

/**
 * Add a food item.
 * @function AddItem
 * @param { AddForm } addForm - Added formdata
 * @param { Food[] } list - Food data
 * @param { Dispatch<any> } dispatch - Set data by dispatch
 * @async
 * @returns { Promise<void> } - Promise
 */
export const AddItem = async (
  addForm: AddForm,
  list: Food[],
  dispatch: Dispatch<any>
): Promise<void> => {
  const endPoint: Paths = 'food/add';

  const imgFile = document.getElementById('image')! as HTMLInputElement;
  const myForm = new FormData();
  myForm.append('title', addForm.title);
  myForm.append('sorts', addForm.sorts);
  myForm.append('price', String(addForm.price));
  myForm.append('image', imgFile!.files![0]!);
  myForm.append('included', addForm.included);

  try {
    const { data } = await request.post<Food>(endPoint, myForm);
    dispatch(setList([...list, data]));
  } catch (err) {
    toast.error((err as Error).message);
  }
};

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
  const endPoint = `food/${getId}` as Paths;

  try {
    await request.put<Food>(endPoint as Paths, editForm);

    const temp = [...list];
    const index = temp.findIndex((i: Food) => i.id === getId);
    temp[index] = editForm as Food;
    dispatch(setList(temp));

    dispatch(setView(''));
  } catch (err) {
    toast.error((err as Error).message);
  }
};

/**
 * Delete a food item.
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
    const endPoint = `food/${id}` as Paths;

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
