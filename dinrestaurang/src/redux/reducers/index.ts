import { combineReducers } from 'redux';

import { errorReducer } from './error';
import { listReducer } from './list';
import { loadingReducer } from './loading';

export const allReducers = combineReducers({
  listReducer,
  errorReducer,
  loadingReducer,
});
