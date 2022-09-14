import { AddForm, Food, IEditForm } from 'models';
import { SET_ADD_FORM, SET_EDIT_FORM, SET_GET_ID, SET_ID, SET_LIST, SET_LOADING, SET_VIEW } from 'utils/constants';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Add form action.
 *
 * @param payload - Add-form values
 * @returns Object
 */

export const setAddForm = (payload: AddForm): object => {
  return { type: SET_ADD_FORM, payload };
};

/**
 * Edit-form action.
 *
 * @param payload - Edit-form values
 * @returns Object
 */

export const setEditForm = (payload: IEditForm) => {
  return { type: SET_EDIT_FORM, payload };
};

/**
 * View action.
 *
 * @param payload - String
 * @returns Object
 */

export const setView = (payload: string) => {
  return { type: SET_VIEW, payload };
};

/**
 * Id action.
 *
 * @param payload - String | null
 * @returns Object
 */

export const setId = (payload: string | null): object => {
  return { type: SET_ID, payload };
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

/**
 * List action.
 *
 * @param payload - Food array
 * @returns Object
 */

export const setList = (payload: Food[]) => {
  return { type: SET_LIST, payload };
};

/**
 * Get id action.
 *
 * @param payload - String | null
 * @returns Object
 */

export const setGetId = (payload: string | null): object => {
  return { type: SET_GET_ID, payload };
};
