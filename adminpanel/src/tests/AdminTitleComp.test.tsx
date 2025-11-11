import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '@core/redux/app';
import AdminTitleComp from '@core/containers/AdminTitleComp';

it('Render Admin title component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <AdminTitleComp />
    </Provider>
  );
  expect(getByText(/Välkommen till din restaurang/)).toBeInTheDocument();
});
