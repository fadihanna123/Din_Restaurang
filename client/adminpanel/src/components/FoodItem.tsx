import axios from "axios";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { getIdState, listState, loadingState, viewState } from "states";
import { Button } from "styles";
import { Food } from "typings";

const FoodItem: FC<{
  item: Food;
}> = ({ item }: { item: Food }) => {
  const [, setView] = useRecoilState(viewState);
  const [, setId] = useRecoilState(getIdState);
  const [, setLoading] = useRecoilState(loadingState);
  const [list, setList] = useRecoilState(listState);

  const DeleteItem = async (id: string): Promise<void> => {
    try {
      const endPoint: string = `http://localhost:5000/food/${id}`;

      setLoading(true);

      await axios.delete<Food>(endPoint);
      const temp = [...list].filter((item) => item._id !== id);
      setList(temp);
    } catch (err) {
      console.log((err as Error).message);
    } finally {
      setLoading && setLoading(false);
    }
  };

  const loadDeleteItem = (): void => {
    DeleteItem(item._id);
  };

  const editHandler = (): void => {
    setView && setView("Edit");

    setId && setId(item._id);
  };

  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.sorts}</td>
      <td>{item.price} kr </td>
      <td>{item.included}</td>
      <td>
        <Button onClick={editHandler}>Ändra</Button>
        <Button onClick={loadDeleteItem}>Radera</Button>
      </td>
    </tr>
  );
};

export default FoodItem;
