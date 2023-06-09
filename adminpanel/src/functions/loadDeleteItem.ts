import { Food } from 'models';
import { Dispatch } from 'redux';

import { DeleteItem } from './deleteItem';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Run DeleteItem function.
 * @param item - Food object
 * @param list - Food array
 * @param dispatch - Dispatch
 * @returns { Promise<void> } Promise
 */

export const loadDeleteItem = (
  item: Food,
  list: Food[],
  dispatch: Dispatch<any>
): Promise<void> => DeleteItem(item.id, list, dispatch);
