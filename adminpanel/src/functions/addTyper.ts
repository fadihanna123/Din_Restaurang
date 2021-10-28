import { AddForm } from "typings";

const addTyper = (
  e: React.ChangeEvent<HTMLInputElement>,
  addForm: AddForm,
  setAddForm: (addForm: AddForm) => void
) => setAddForm({ ...addForm, [e.target.name]: e.target.value });

export { addTyper };
