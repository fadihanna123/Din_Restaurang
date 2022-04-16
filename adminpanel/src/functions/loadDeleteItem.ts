import { Food } from 'models';
import { Dispatch } from 'redux';

import { DeleteItem } from './deleteItem';

export const loadDeleteItem = (
  item: Food,
  list: Food[],
  dispatch: Dispatch<any>
): Promise<void> => DeleteItem(item.id, list, dispatch);
