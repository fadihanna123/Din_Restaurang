import React from 'react';
import { editHandler, loadDeleteItem } from 'functions';
import { Food } from 'models';
import { useAppDispatch, useAppSelector } from 'redux/app/hooks';
import { getList } from 'redux/reducers';
import { Button } from 'styles/global';

const FoodItem: React.FC<{
  item: Food;
}> = ({ item }: { item: Food }) => {
  const list = useAppSelector(getList);

  const dispatch = useAppDispatch();

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
