import styled from "@emotion/styled";
import { FC } from "react";
import { layout, space, typography } from "styled-system";
import { Col } from "styles";
import { Food } from "typings";

const FoodItem: FC<{ item: Food }> = ({ item }: { item: Food }) => {
  const FoodImgLink: string = require("../images/" + item.image).default;

  return (
    <Col>
      <FoodImg
        width="auto"
        height="auto"
        maxWidth="100%"
        maxHeight="100%"
        src={FoodImgLink}
        alt={item.title}
        aria-label={item.title}
        loading="lazy"
      />
      <FoodTitle textAlign="center" fontSize={25}>
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
};
export default FoodItem;

const FoodImg = styled("img")(layout, space);

const FoodTitle = styled("h1")(typography);

const MainTxt = styled("p")(typography, space);
