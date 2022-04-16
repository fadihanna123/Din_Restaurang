import { ActionTypes } from 'models';
import { SET_ADD_FORM } from 'utils/constants';

const initialState = {
  title: "",
  sorts: "",
  price: null,
  image: "",
  included: "",
};

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
