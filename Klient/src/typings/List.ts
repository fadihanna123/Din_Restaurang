export interface Food {
  title: string;
  sorts: string;
  price: number;
  image: string;
  included: string;
}
export interface Props {
  loading: boolean;
  list: Food[];
  setList: (list: Food[]) => void;
  setLoading: (loading: boolean) => void;
}
