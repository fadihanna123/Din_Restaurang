import styled from "@emotion/styled";
import { FC } from "react";
import { layout, space, typography } from "styled-system";
import { Col } from "styles";
import { Food } from "typings";

const FoodItem: FC<{
  _id: string;
  title: string;
  sorts: string;
  included: string;
  price: number;
  image: string;
}> = ({ _id, title, sorts, included, price, image }: Food) => {
  const FoodImgLink: string = require("../images/" + image).default;

  return (
    <Col>
      <FoodImg width={1} height={300} p={3} src={FoodImgLink} alt="Maträtten" />
      <FoodTitle textAlign="center" fontSize={25}>
        {title}
      </FoodTitle>
      <MainTxt p={10} fontSize={20}>
        <span>Sorter: {sorts} </span>
        <br />
        Pris: {price} kr <br />
        Ingår: {included}
      </MainTxt>

      <br />
    </Col>
  );
};
export default FoodItem;

const FoodImg = styled("img")(layout, space);

const FoodTitle = styled("h1")(typography);

const MainTxt = styled("p")(typography, space);
