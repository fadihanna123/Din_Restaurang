import React from 'react';
import WelcomeComp from '@components/WelcomeComp';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

it('Render Welcome component', () => {
  const { getByText } = render(<WelcomeComp />);
  expect(getByText(/Välkommen till din restaurang/)).toBeInTheDocument();
});
