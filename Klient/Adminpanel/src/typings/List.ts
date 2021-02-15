export interface Food {
  _id: string;
  title: string;
  sorts: string;
  price: number;
  image: string;
  included: string;
}

export interface Props {
  setLoading: (loading: boolean) => void;
  setList: (list: Food[]) => void;
  list: Food[];
  loading: boolean;
  view: string;
  setView: (view: string) => void;
  getId: null | string;
  setId: (getId: null | string) => void;
}

export interface AddForm {
  title: string;
  sorts: string;
  price: number;
  image: string;
  included: string;
}

export interface IEditForm {
  _id: string;
  title: string;
  sorts: string;
  price: number;
  image: string;
  included: string;
}
