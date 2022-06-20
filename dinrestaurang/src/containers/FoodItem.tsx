import { Food } from "models";
import { Col, FoodImg, FoodTitle, MainTxt } from "styles";

const FoodItem: React.FC<{ item: Food }> = ({ item }: { item: Food }) => {
    return (
        <Col>
            <FoodImg
                width="auto"
                height="auto"
                maxWidth="100%"
                maxHeight="100%"
                src={`../assets/${item.image}`}
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
