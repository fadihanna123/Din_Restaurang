import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState = '';

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) =>
      (state = action.payload),
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
export const getError = (state: RootState) => state.error;
