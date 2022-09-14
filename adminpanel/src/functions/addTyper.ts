import { AddForm } from 'models';
import { Dispatch } from 'redux';
import { setAddForm } from 'redux/actions';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle add form values.
 *
 * @param e - Event
 * @param addForm - AddForm values
 * @param dispatch - Dispatch
 * @returns Object
 */

export const addTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  addForm: AddForm,
  dispatch: Dispatch<any>
) => dispatch(setAddForm({ ...addForm, [e.target.name]: e.target.value }));
