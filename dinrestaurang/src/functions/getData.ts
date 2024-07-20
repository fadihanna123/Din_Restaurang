import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { setError, setList, setLoading } from '../redux/reducers';

import { getFoodData } from './apiStore';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all food items.
 * @function getData
 * @async
 * @param dispatch - Dispatch
 *  @param mounted - Mounted
 * @returns { void } Promise
 */
export const getData = (dispatch: Dispatch<any>, mounted: boolean): void => {
  dispatch(setLoading(true));

  getFoodData()
    .then(({ data }: any) => {
      if (mounted) {
        if (data.message) {
          dispatch(setError(data.message));
          toast.error(data.message);
        } else {
          dispatch(setList(data));
        }
      }
    })
    .catch((err: Error) => dispatch(setError(err.message)))
    .finally(() => dispatch(setLoading(false)));
};
