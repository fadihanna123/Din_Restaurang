import axios from "axios";
import { useRecoilState } from "recoil";
import { getIdState, listState, loadingState, viewState } from "States";
import { Button } from "styles";
import { Food } from "typings";

const FoodItem = ({ item, i }: { item: Food; i: number }) => {
  const [, setView] = useRecoilState(viewState);
  const [, setId] = useRecoilState(getIdState);
  const [, setLoading] = useRecoilState(loadingState);
  const [list, setList] = useRecoilState(listState);

  const DeleteItem = async (id: string): Promise<void> => {
    try {
      setLoading(true);

      await axios.delete<Food>(`http://localhost:5000/food/${id}`);
      const temp = [...list].filter((item) => item._id !== id);
      setList(temp);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading && setLoading(false);
    }
  };

  return (
    <tr key={i}>
      <td>{item.title}</td>
      <td>{item.sorts}</td>
      <td>{item.price} kr </td>
      <td>{item.included}</td>
      <td>
        <Button
          onClick={() => {
            setView && setView("Edit");
            setId && setId(item._id);
          }}
        >
          Ändra
        </Button>
        <Button onClick={() => DeleteItem(item._id)}>Radera</Button>
      </td>
    </tr>
  );
};

export default FoodItem;
