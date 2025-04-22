import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app/store';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: IEditForm = {
  id: '',
  title: '',
  sorts: '',
  price: 0,
  image: '',
  included: '',
};

export const editFormSlice = createSlice({
  name: 'editForm',
  initialState,
  reducers: {
    setEditForm: (state, action: PayloadAction<IEditForm>) =>
      (state = action.payload),
  },
});

export const { setEditForm } = editFormSlice.actions;

export default editFormSlice.reducer;
export const getEditForm = (state: RootState) => state.editForm;
