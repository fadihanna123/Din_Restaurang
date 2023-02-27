import React from 'react';
import { IEditForm } from 'models';
import { Dispatch } from 'redux';
import { setEditForm } from 'redux/reducers';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle edit-form values.
 *
 * @param e - Event
 * @param editForm - Edit-form values.
 * @param dispatch - Dispatch
 * @returns Object
 */

export const editTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  editForm: IEditForm,
  dispatch: Dispatch<any>
): object =>
  dispatch(setEditForm({ ...editForm, [e.target.name]: e.target.value }));
