import { editHandler, loadDeleteItem } from 'functions';
import { Food, ListReducerTypes } from 'models';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'styles/global';

const FoodItem: React.FC<{
  item: Food;
}> = ({ item }: { item: Food }) => {
  const list = useSelector((state: ListReducerTypes) => state.listReducer);

  const dispatch = useDispatch();

  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.sorts}</td>
      <td>{item.price} kr </td>
      <td>{item.included}</td>
      <td>
        <Button onClick={() => editHandler(item, dispatch)}>Ändra</Button>
        <Button onClick={() => loadDeleteItem(item, list, dispatch)}>
          Radera
        </Button>
      </td>
    </tr>
  );
};

export default FoodItem;
