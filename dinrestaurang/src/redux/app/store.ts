import { configureStore } from '@reduxjs/toolkit';

import errorReducer from '../reducers/error';
import listReducer from '../reducers/list';
import loadingReducer from '../reducers/loading';

export const store = configureStore({
  reducer: { loading: loadingReducer, error: errorReducer, list: listReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
