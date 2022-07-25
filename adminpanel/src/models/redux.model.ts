import { AddForm, Food } from 'models';

import { IEditForm } from './forms.model';

export class ActionTypes {
  constructor(public type: string, public payload: void) {}
}

export class AddFormReducerTypes {
  constructor(public addFormReducer: AddForm) {}
}

export class EditFormReducerTypes {
  constructor(public editFormReducer: IEditForm) {}
}

export class LoadingReducerTypes {
  constructor(public loadingReducer: boolean) {}
}

export class IdReducerTypes {
  constructor(public IdReducer: string | null) {}
}

export class ViewReducerTypes {
  constructor(public viewReducer: string) {}
}

export class ListReducerTypes {
  constructor(public listReducer: Food[]) {}
}

export class GetIdReducerTypes {
  constructor(public getIdReducer: string | null) {}
}
