import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import EditFoodBtn from '@core/components/forms/EditFoodBtn';
import { Provider } from 'react-redux';
import { store } from '@core/redux/app';

it('Render Edit fooditem component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <EditFoodBtn />
    </Provider>
  );
  expect(getByText(/Ändra/)).toBeInTheDocument();
});
