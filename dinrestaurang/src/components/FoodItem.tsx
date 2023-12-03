import { Col, FoodImg, FoodTitle, MainTxt } from 'styles';
import React from 'react';

const FoodItem: React.FC<{ item: Food }> = ({ item }: { item: Food }) => (
  <Col>
    <FoodImg
      src={require(`../assets/${item.image}.jpg`)}
      alt={item.title}
      aria-label={item.title}
      loading='lazy'
    />
    <FoodTitle>{item.title}</FoodTitle>
    <MainTxt>
      <span>Sorter: {item.sorts} </span>
      <br />
      Pris: {item.price} kr <br />
      Ingår: {item.included}
    </MainTxt>

    <br />
  </Col>
);

export default FoodItem;
