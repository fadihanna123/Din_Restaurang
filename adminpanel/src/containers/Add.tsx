import React, { useEffect } from "react";
import sal from "sal.js";
import { Col20, Label, LabelCol, MyAddForm, Row } from "styles/global";

import AddBtn from "./forms/AddBtn";
import ImageField from "./forms/ImageField";
import IncludedField from "./forms/IncludedField";
import PriceField from "./forms/PriceField";
import SortsField from "./forms/SortsField";
import TitleField from "./forms/TitleField";

const AddComp: React.FC = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <MyAddForm data-sal="flip-right">
      <Row>
        <LabelCol>
          <Label htmlFor="title">Titel:</Label>
        </LabelCol>
        <Col20>
          <TitleField />
        </Col20>
      </Row>

      <Row>
        <LabelCol>
          <Label htmlFor="sorts">Sorts:</Label>
        </LabelCol>
        <Col20>
          <SortsField />
        </Col20>
      </Row>

      <Row>
        <LabelCol>
          <Label htmlFor="price">Pris:</Label>
        </LabelCol>
        <Col20>
          <PriceField />
        </Col20>
      </Row>

      <Row>
        <LabelCol>
          <Label htmlFor="image">Bildfilen:</Label>
        </LabelCol>
        <Col20>
          <ImageField />
        </Col20>
      </Row>

      <Row>
        <LabelCol>
          <Label htmlFor="included">Ingår:</Label>
        </LabelCol>
        <Col20>
          <IncludedField />
        </Col20>
      </Row>
      <AddBtn />
    </MyAddForm>
  );
};

export default AddComp;
