import styled from "@emotion/styled";
import { layout, space, typography } from "styled-system";
import { Col } from "styles";
import { Food } from "typings";

const FoodItem = ({ item, i }: { item: Food; i: number }) => {
  return (
    <Col key={i}>
      <FoodImg
        width={1}
        height={300}
        p={3}
        src={require("../Images/" + item.image).default}
        alt="Maträtten"
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
