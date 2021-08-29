import axios from "axios";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { getIdState, listState, loadingState, viewState } from "states";
import { Button } from "styles";
import { Food } from "typings";

const FoodItem: FC<{
  _id: string;
  title: string;
  sorts: string;
  included: string;
  price: number;
}> = ({ _id, title, sorts, included, price }) => {
  const [, setView] = useRecoilState(viewState);
  const [, setId] = useRecoilState(getIdState);
  const [, setLoading] = useRecoilState(loadingState);
  const [list, setList] = useRecoilState(listState);

  const DeleteItem = async (id: string): Promise<void> => {
    try {
      const endPoint: string = `http://localhost:5000/food/${id}`;

      setLoading(true);

      await axios.delete<Food>(endPoint);
      const temp = [...list].filter((item) => _id !== id);
      setList(temp);
    } catch (err) {
      console.log((err as Error).message);
    } finally {
      setLoading && setLoading(false);
    }
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{sorts}</td>
      <td>{price} kr </td>
      <td>{included}</td>
      <td>
        <Button
          onClick={() => {
            setView && setView("Edit");
            setId && setId(_id);
          }}
        >
          Ändra
        </Button>
        <Button onClick={() => DeleteItem(_id)}>Radera</Button>
      </td>
    </tr>
  );
};

export default FoodItem;
