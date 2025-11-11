import React from 'react';
import Footer from '@inc/Footer';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

it('Render Footer component', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/08-441 45 63/)).toBeInTheDocument();
});
