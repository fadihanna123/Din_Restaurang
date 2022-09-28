import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: string = '';

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<string>) => (state = action.payload),
  },
});

export const { setView } = viewSlice.actions;

export default viewSlice.reducer;
export const getView = (state: RootState) => state.view;
