import { createSlice } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app/store';

import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: AddForm = {
  title: '',
  sorts: '',
  price: 0,
  included: '',
};

export const addFormSlice = createSlice({
  name: 'addForm',
  initialState,
  reducers: {
    setAddForm: (state, action: PayloadAction<AddForm>) =>
      (state = action.payload),
  },
});

export const { setAddForm } = addFormSlice.actions;

export default addFormSlice.reducer;
export const getAddForm = (state: RootState) => state.addForm;
