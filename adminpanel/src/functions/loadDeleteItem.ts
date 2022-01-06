import { Dispatch } from 'redux';
import { Food } from 'typings';

import { DeleteItem } from './deleteItem';

export const loadDeleteItem = (
  item: Food,
  list: Food[],
  dispatch: Dispatch<any>
): Promise<void> => DeleteItem(item._id, list, dispatch);
