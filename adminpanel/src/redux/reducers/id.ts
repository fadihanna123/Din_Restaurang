import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState = '' as string;

export const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => (state = action.payload),
  },
});

export const { setId } = idSlice.actions;

export default idSlice.reducer;
export const getIdState = (state: RootState) => state.id;
