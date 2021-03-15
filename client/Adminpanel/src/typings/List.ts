export interface Food {
  _id: string;
  title: string;
  sorts: string;
  price: number;
  image: string;
  included: string;
}

export interface Props {
  list: Food[];
  setList: (list: Food[]) => void;
  setLoading?: (loading: boolean) => void;
  loading?: boolean;
  view?: string;
  setView?: (view: string) => void;
  getId?: null | string;
  setId?: (getId: null | string) => void;
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
