import { configureStore } from '@reduxjs/toolkit';

import addFormReducer from '../reducers/addForm';
import editFormReducer from '../reducers/editForm';
import idReducer from '../reducers/id';
import listReducer from '../reducers/list';
import loadingReducer from '../reducers/loading';
import viewReducer from '../reducers/view';

export const store = configureStore({
  reducer: {
    addForm: addFormReducer,
    editForm: editFormReducer,
    list: listReducer,
    loading: loadingReducer,
    view: viewReducer,
    id: idReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
