import { request } from 'api';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setList, setLoading } from 'redux/actions';
import { Food } from 'typings';

export const getData = async (dispatch: Dispatch<any>): Promise<void> => {
  try {
    const endPoint: string = "food";

    dispatch(setLoading(true));

    const { data } = await request.get<Food[]>(endPoint);
    dispatch(setList(data));
  } catch (err) {
    toast.error((err as Error).message);
  } finally {
    dispatch(setLoading(false));
  }
};
