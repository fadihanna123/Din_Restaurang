import React from 'react';
import FoodItem from '@components/FoodItem';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

it('Render Food item component', () => {
  const { getByText } = render(
    <FoodItem
      item={{
        id: '1',
        title: 'Kebab',
        sorts: 'Kebab',
        price: 10,
        image: 'kebab.jpg',
        included: 'Inkluderar: Kebab, Fisk, Kryddor',
      }}
    />
  );
  expect(getByText(/Sorter/)).toBeInTheDocument();
});
