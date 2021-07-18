import { Col, FoodImg, FoodTitle, MainTxt } from "styles";
import { Food } from "typings";

const FoodItem = ({ item, i }: { item: Food; i: number }) => {
  return (
    <Col key={i}>
      <FoodImg
        src={require("../Images/" + item.image).default}
        alt="Maträtten"
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
};

export default FoodItem;
