import { ActionTypes, Food } from 'models';
import { SET_LIST } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: Food[] = [];

/**
 * List reducer.
 *
 * @param state - Food array
 * @param Actiontypes
 * @returns Food array | void
 */

export const listReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_LIST:
      return payload;

    default:
      return state;
  }
};
