import { ActionTypes } from 'models';
import { SET_LOADING } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

/**
 * Loading reducer.
 *
 * @param state - Boolean value
 * @param Actiontypes
 * @returns Boolean | void
 */

export const loadingReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_LOADING:
      return payload;

    default:
      return state;
  }
};
