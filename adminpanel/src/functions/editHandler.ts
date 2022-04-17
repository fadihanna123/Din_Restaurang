import { Food } from 'models';
import { Dispatch } from 'redux';
import { setId, setView } from 'redux/actions';

export const editHandler = (item: Food, dispatch: Dispatch<any>): void => {
  dispatch(setView("Edit"));

  dispatch(setId(item.id));
};
