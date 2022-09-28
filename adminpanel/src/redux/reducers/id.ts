import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/app';

import type { PayloadAction } from '@reduxjs/toolkit';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState = '' as string | null;

export const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string | null>) =>
      (state = action.payload),
  },
});

export const { setId } = idSlice.actions;

export default idSlice.reducer;
export const getIdState = (state: RootState) => state.id;
