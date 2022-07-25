import { IEditForm } from 'models';
import { Dispatch } from 'redux';
import { setEditForm } from 'redux/actions';

export const editTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  editForm: IEditForm,
  dispatch: Dispatch<any>
): object =>
  dispatch(
    setEditForm({ ...editForm, [e.target.name]: e.target.value })
  );
