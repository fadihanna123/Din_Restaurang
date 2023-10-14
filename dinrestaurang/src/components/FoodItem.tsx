import { Col, FoodImg, FoodTitle, MainTxt } from 'styles';
import React from 'react';

const FoodItem: React.FC<{ item: Food }> = ({ item }: { item: Food }) => (
  <Col>
    <FoodImg
      width='100%'
      height='500px'
      maxWidth='100%'
      maxHeight='100%'
      src={require(`../assets/${item.image}.jpg`)}
      alt={item.title}
      aria-label={item.title}
      loading='lazy'
    />
    <FoodTitle textAlign='center' fontSize={25}>
      {item.title}
    </FoodTitle>
    <MainTxt p={10} fontSize={20}>
      <span>Sorter: {item.sorts} </span>
      <br />
      Pris: {item.price} kr <br />
      Ingår: {item.included}
    </MainTxt>

    <br />
  </Col>
);

export default FoodItem;
