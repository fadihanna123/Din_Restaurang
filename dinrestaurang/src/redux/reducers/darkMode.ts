import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = false;

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
export const getDarkMode = (state: RootState) => state.darkMode;
