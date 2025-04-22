import React from 'react';

// Components
import { editHandler, loadDeleteItem } from '@functions/helper';
import { Button } from '@styles/global';
import useReduxConsts from '@hooks/useReduxConsts';

const FoodItem: React.FC<{
  item: Food;
}> = ({ item }: { item: Food }) => {
  const { list, dispatch } = useReduxConsts();

  return (
    <tr>
      <td>
        <b>{item.title}</b>
      </td>
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
