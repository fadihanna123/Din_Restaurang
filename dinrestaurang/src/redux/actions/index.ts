import { Food } from 'models';
import { AnyAction } from 'redux';
import { SET_ERROR, SET_LIST, SET_LOADING } from 'utils/constants';

export const setError = (payload: string): object => {
  return { type: SET_ERROR, payload };
};

export const setList = (payload: Food[]): AnyAction => {
  return { type: SET_LIST, payload };
};

export const setLoading = (payload: boolean): object => {
  return { type: SET_LOADING, payload };
};
