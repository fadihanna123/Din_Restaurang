import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import AddComp from '@core/containers/Add';
import { Provider } from 'react-redux';
import { store } from '@core/redux/app';

it('Render Add fooditem component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <AddComp />
    </Provider>
  );
  expect(getByText(/Titel:/)).toBeInTheDocument();
});
