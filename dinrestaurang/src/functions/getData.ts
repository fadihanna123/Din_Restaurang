import { Food } from "typings";
import { request } from "api";
import { food_api } from "utils";

export const getData = async (
  setLoading: (loading: boolean) => void,
  setList: (list: Food[]) => void,
  setError: (error: string) => void
): Promise<void> => {
  try {
    setLoading && setLoading(true);

    const data: Food[] = await request.get(food_api);

    setList && setList(data);
  } catch (err) {
    setError && setError((err as Error).message);
  } finally {
    setLoading && setLoading(false);
  }
};
