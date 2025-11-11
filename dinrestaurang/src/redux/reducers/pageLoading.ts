import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/app';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

const initialState: boolean = true;

export const pageLoadingSlice = createSlice({
  name: 'pageLoading',
  initialState,
  reducers: {
    setPageLoading: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { setPageLoading } = pageLoadingSlice.actions;

export default pageLoadingSlice.reducer;
export const getPageLoading = (state: RootState) => state.pageLoading;
