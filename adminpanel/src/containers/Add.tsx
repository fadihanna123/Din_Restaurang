import React from 'react';
import { Col20, Label, LabelCol, MyAddForm, Row } from 'styles/global';

import AddBtn from '../components/forms/AddBtn';
import ImageField from './forms/AddImageField';
import IncludedField from './forms/AddIncludedField';
import PriceField from './forms/AddPriceField';
import SortsField from './forms/AddSortsField';
import TitleField from './forms/AddTitleField';

const AddComp: React.FC = () => {
  return (
    <MyAddForm data-sal='flip-right'>
      <Row>
        <LabelCol>
          <Label htmlFor='title'>Titel:</Label>
        </LabelCol>
        <Col20>
          <TitleField />
        </Col20>
      </Row>

      <Row>
        <LabelCol>
          <Label htmlFor='sorts'>Sorts:</Label>
        </LabelCol>
        <Col20>
          <SortsField />
        </Col20>
      </Row>

      <Row>
        <LabelCol>
          <Label htmlFor='price'>Pris:</Label>
        </LabelCol>
        <Col20>
          <PriceField />
        </Col20>
      </Row>

      <Row>
        <LabelCol>
          <Label htmlFor='image'>Bildfilen:</Label>
        </LabelCol>
        <Col20>
          <ImageField />
        </Col20>
      </Row>

      <Row>
        <LabelCol>
          <Label htmlFor='included'>Ingår:</Label>
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
