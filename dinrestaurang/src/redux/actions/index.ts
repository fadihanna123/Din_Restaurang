import { Food } from 'models';
import { AnyAction } from 'redux';
import { SET_ERROR, SET_LIST, SET_LOADING } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Error action.
 *
 * @param payload - String
 * @returns Object
 */

export const setError = (payload: string): object => {
  return { type: SET_ERROR, payload };
};

/**
 * List action.
 *
 * @param payload
 * @returns AnyAction
 */

export const setList = (payload: Food[]): AnyAction => {
  return { type: SET_LIST, payload };
};

/**
 * Loading action.
 *
 * @param payload - Boolean
 * @returns Object
 */

export const setLoading = (payload: boolean): object => {
  return { type: SET_LOADING, payload };
};
