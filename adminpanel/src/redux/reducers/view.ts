import { ActionTypes } from 'models';
import { SET_VIEW } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

/**
 * View reducer.
 *
 * @param state - String
 * @param Actiontypes
 * @returns String | void
 */

export const viewReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_VIEW:
      return payload;

    default:
      return state;
  }
};
