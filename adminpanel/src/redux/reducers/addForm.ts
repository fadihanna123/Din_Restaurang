import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: AddForm = {
  title: '',
  sorts: '',
  price: 0,
  image: '',
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
