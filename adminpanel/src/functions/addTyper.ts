import { AddForm } from 'models';
import { Dispatch } from 'redux';
import { setAddForm } from 'redux/actions';

export const addTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  addForm: AddForm,
  dispatch: Dispatch<any>
) => dispatch(setAddForm({ ...addForm, [e.target.name]: e.target.value }));
