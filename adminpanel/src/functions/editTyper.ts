import { Dispatch } from 'redux';
import { setEditForm } from 'redux/actions';
import { IEditForm } from 'typings';

export const editTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  editForm: IEditForm,
  dispatch: Dispatch<any>
): Object =>
  dispatch(setEditForm({ ...editForm, [e.target.name]: e.target.value }));
