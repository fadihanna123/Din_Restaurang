import { request } from 'api';
import { Food } from 'models';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setList, setLoading } from 'redux/reducers';
import { setError } from 'redux/reducers/error';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all food items.
 *
 * @param dispatch - Dispatch
 * @returns Promise
 */
export const getData = async (dispatch: Dispatch<any>): Promise<void> => {
  try {
    const endPoint = 'food';

    dispatch(setLoading(true));

    const { data } = await request.get<Food[]>(endPoint);
    dispatch(setList(data));
  } catch (err) {
    if ((err as { code: string }).code === 'ERR_NETWORK') {
      toast.error('Servern dosent\'t respond', {
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
