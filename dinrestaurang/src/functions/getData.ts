import { Dispatch } from 'redux';
import { setError, setList, setLoading } from 'redux/actions';

import { getFoodData } from './api';

export const getData = async (
  dispatch: Dispatch<any>
): Promise<void> => {
  dispatch(setLoading(true));

  getFoodData()
    .then((data: any) => dispatch(setList(data)))
    .catch((err: Error) => dispatch(setError(err.message)))
    .finally(() => dispatch(setLoading(false)));
};
