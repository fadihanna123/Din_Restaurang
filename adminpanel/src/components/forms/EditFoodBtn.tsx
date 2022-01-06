import { EditItem } from 'functions';
import React from 'react';
import { Button } from 'styles';

const EditFoodBtn: React.FC = () => (
  <Button type="submit" onClick={EditItem}>
    Ändra
  </Button>
);

export default EditFoodBtn;
