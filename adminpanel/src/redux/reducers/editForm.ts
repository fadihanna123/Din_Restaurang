import { ActionTypes } from 'models';
import { SET_EDIT_FORM } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState = {
  id: '',
  title: '',
  sorts: '',
  price: null,
  image: '',
  included: '',
};

/**
 * Edit-form reducer.
 *
 * @param state - Edit-form values
 * @param Actiontypes
 * @returns Edit-form object
 */

export const editFormReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_EDIT_FORM:
      return payload;

    default:
      return state;
  }
};
