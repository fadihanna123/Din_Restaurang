import { configureStore } from '@reduxjs/toolkit';

// Components
import addFormReducer from '../reducers/addForm';
import editFormReducer from '../reducers/editForm';
import idReducer from '../reducers/id';
import listReducer from '../reducers/list';
import loadingReducer from '../reducers/loading';
import viewReducer from '../reducers/view';
import errorReducer from '../reducers/error';
import pageLoadingReducer from '../reducers/pageLoading';
import darkModeReducer from '../reducers/darkMode';

export const store = configureStore({
  reducer: {
    addForm: addFormReducer,
    editForm: editFormReducer,
    list: listReducer,
    loading: loadingReducer,
    view: viewReducer,
    id: idReducer,
    error: errorReducer,
    pageLoading: pageLoadingReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
