import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import FoodItem from '@core/containers/FoodItem';
import { Provider } from 'react-redux';
import { store } from '@core/redux/app';

it('Render Fooditem component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <FoodItem
        item={{
          id: '1',
          title: 'test',
          sorts: 'test',
          price: 10,
          included: 'test',
          image: 'kebab.jpg',
        }}
      />
    </Provider>
  );
  expect(getByText(/Ändra/)).toBeInTheDocument();
});
