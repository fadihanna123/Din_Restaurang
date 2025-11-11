import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import EditComp from '@core/containers/Edit';
import { Provider } from 'react-redux';
import { store } from '@core/redux/app';

it('Render Edit fooditem component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <EditComp />
    </Provider>
  );
  expect(getByText(/Titel:/)).toBeInTheDocument();
});
