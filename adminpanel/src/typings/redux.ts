import { AddForm, Food } from 'typings';

import { IEditForm } from './forms';

export interface ActionTypes {
  type: string;
  payload: void;
}

export interface AddFormReducerTypes {
  addFormReducer: AddForm;
}

export interface EditFormReducerTypes {
  editFormReducer: IEditForm;
}

export interface LoadingReducerTypes {
  loadingReducer: boolean;
}

export interface IdReducerTypes {
  IdReducer: string | null;
}

export interface ViewReducerTypes {
  viewReducer: string;
}

export interface ListReducerTypes {
  listReducer: Food[];
}

export interface GetIdReducerTypes {
  getIdReducer: string | null;
}
