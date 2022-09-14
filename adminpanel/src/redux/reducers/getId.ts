import { ActionTypes } from 'models';
import { SET_GET_ID } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string | null = null;

/**
 * Get Id reducer.
 *
 * @param state - string | null
 * @param Actiontypes
 * @returns Void | null
 */

export const getIdReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_GET_ID:
      return payload;

    default:
      return state;
  }
};
