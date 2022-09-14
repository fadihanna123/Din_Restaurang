import { Food } from 'models';
import { Dispatch } from 'redux';
import { setId, setView } from 'redux/actions';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Switch to edit-form.
 *
 * @param item - Food object
 * @param dispatch - Dispatch
 * @returns Void
 */

export const editHandler = (item: Food, dispatch: Dispatch<any>): void => {
  dispatch(setView('Edit'));

  dispatch(setId(item.id));
};
