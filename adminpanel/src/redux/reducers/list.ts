import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Components
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: Food[] = [];

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Food[]>) => (state = action.payload),
  },
});

export const { setList } = listSlice.actions;

export default listSlice.reducer;
export const getList = (state: RootState) => state.list;
