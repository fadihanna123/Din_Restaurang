import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import Footer from '@core/inc/Footer';
import { Provider } from 'react-redux';
import { store } from '@core/redux/app';

it('Render Footer component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  expect(getByText(/Sveavägen 14, Stockholm./)).toBeInTheDocument();
});
