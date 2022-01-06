import { ActionTypes } from 'typings';
import { SET_ID } from 'utils/constants';

const initialState: string | null = "";

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
