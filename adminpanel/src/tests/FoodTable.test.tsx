import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import FoodTable from '@core/containers/FoodTable';
import { Provider } from 'react-redux';
import { store } from '@core/redux/app';

it('Render Foodtable component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <FoodTable />
    </Provider>
  );
  expect(getByText(/Title:/)).toBeInTheDocument();
});
