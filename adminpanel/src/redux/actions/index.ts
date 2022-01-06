import { AddForm, Food, IEditForm } from 'typings';
import { SET_ADD_FORM, SET_EDIT_FORM, SET_GET_ID, SET_ID, SET_LIST, SET_LOADING, SET_VIEW } from 'utils/constants';

export const setAddForm = (payload: AddForm): Object => {
  return { type: SET_ADD_FORM, payload };
};

export const setEditForm = (payload: IEditForm): Object => {
  return { type: SET_EDIT_FORM, payload };
};

export const setView = (payload: string): Object => {
  return { type: SET_VIEW, payload };
};

export const setId = (payload: string | null): Object => {
  return { type: SET_ID, payload };
};

export const setLoading = (payload: boolean): Object => {
  return { type: SET_LOADING, payload };
};

export const setList = (payload: Food[]): Object => {
  return { type: SET_LIST, payload };
};

export const setGetId = (payload: string | null): Object => {
  return { type: SET_GET_ID, payload };
};
