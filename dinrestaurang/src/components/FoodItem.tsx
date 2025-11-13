import { Col, FoodImg, FoodTitle, MainTxt } from '@styles/index';
import React from 'react';

const FoodItem: React.FC<{ item: Food }> = ({ item }: { item: Food }) => (
  <Col>
    <FoodImg
      src={`/assets/${item.image}`}
      alt={item.title}
      aria-label={item.title}
      loading='lazy'
      onError={(e) => {
        e.currentTarget.style.fontSize = '2rem';
        e.currentTarget.alt = 'No image available';
      }}
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
