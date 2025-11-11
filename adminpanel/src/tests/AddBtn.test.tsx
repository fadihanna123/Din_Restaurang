import React from 'react';
import AddBtn from '@components/forms/AddBtn';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '@core/redux/app';

it('Render Add fooditem button component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <AddBtn addBtnForm={{ current: null }} />
    </Provider>
  );
  expect(getByText(/Lägg till/)).toBeInTheDocument();
});
