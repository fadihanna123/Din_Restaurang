import { ActionTypes } from 'models';
import { SET_ID } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string | null = '';

/**
 * Id reducer.
 *
 * @param state - String | null
 * @param Actiontypes
 * @returns String | void
 */

export const idReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_ID:
      return payload;

    default:
      return state;
  }
};
