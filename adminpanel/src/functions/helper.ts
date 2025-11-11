import React from 'react';
import { Dispatch } from 'redux';

// Components
import { setAddForm, setEditForm, setId, setView } from '@redux/reducers';
import { DeleteItem } from './apiStore';
import { toast } from 'react-toastify';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle add form values.
 * @param e - Event
 * @param addForm - AddForm values
 * @param dispatch - Dispatch
 * @returns Object
 */

export const addTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  addForm: AddForm,
  dispatch: Dispatch<any>
) => {
  if (!addForm) toast.error('All add form fields are required');

  dispatch(setAddForm({ ...addForm, [e.target.name]: e.target.value }));
};

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Switch to edit-form.
 * @param item - Food object
 * @param dispatch - Dispatch
 * @returns Void
 */

export const editHandler = (item: Food, dispatch: Dispatch<any>): void => {
  if (!item) toast.error('Item is not defined');

  dispatch(setView('Edit'));

  dispatch(setId(item.id));
};

/**
 * Handle edit-form values.
 * @param e - Event
 * @param editForm - Edit-form values.
 * @param dispatch - Dispatch
 * @returns Object
 */

export const editTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  editForm: IEditForm,
  dispatch: Dispatch<any>
) => {
  if (!editForm) toast.error('All edit form fields are required');

  dispatch(setEditForm({ ...editForm, [e.target.name]: e.target.value }));
};
/**
 * Run DeleteItem function.
 * @param item - Food object
 * @param list - Food array
 * @param dispatch - Dispatch
 * @returns { Promise<void> } Promise
 */

export const loadDeleteItem = (
  item: Food,
  list: Food[],
  dispatch: Dispatch<any>
) => {
  if (!item || !list) toast.error('Item or list is not defined');

  DeleteItem(item.id, list, dispatch);
};
