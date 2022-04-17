import { ActionTypes } from 'models';
import { SET_EDIT_FORM } from 'utils/constants';

const initialState = {
  id: "",
  title: "",
  sorts: "",
  price: null,
  image: "",
  included: "",
};

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
