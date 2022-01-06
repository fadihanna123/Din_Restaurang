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
