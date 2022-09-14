import { ActionTypes } from 'models';
import { SET_ADD_FORM } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState = {
  title: '',
  sorts: '',
  price: null,
  image: '',
  included: '',
};

/**
 * Add form reducer.
 *
 * @param state - Add-form values
 * @param Actiontypes
 * @returns Add-Form object
 */

export const addFormReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_ADD_FORM:
      return payload;

    default:
      return state;
  }
};
