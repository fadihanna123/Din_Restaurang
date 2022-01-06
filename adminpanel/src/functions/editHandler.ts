import { Dispatch } from 'redux';
import { setId, setView } from 'redux/actions';
import { Food } from 'typings';

export const editHandler = (item: Food, dispatch: Dispatch<any>): void => {
  dispatch(setView("Edit"));

  dispatch(setId(item._id));
};
