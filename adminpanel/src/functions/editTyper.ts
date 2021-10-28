import { IEditForm } from "typings";

const editTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  editForm: IEditForm,
  setEditForm: (editForm: IEditForm) => void
): void => setEditForm({ ...editForm, [e.target.name]: e.target.value });

export { editTyper };
