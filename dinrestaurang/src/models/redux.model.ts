import { Food } from './food.model';

export class ActionTypes {
  constructor(other?: any) {
    this.type = other.type;
    this.payload = other.payload;
  }
  public type: string;
  public payload: void;
}

export class ListReducerTypes {
  constructor(public listReducer: Food[]) {}
}

export class ErrorReducerTypes {
  constructor(public errorReducer: string) {}
}

export class LoadingReducerTypes {
  constructor(public loadingReducer: boolean) {}
}
