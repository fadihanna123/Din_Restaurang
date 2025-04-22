import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState = '';

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
