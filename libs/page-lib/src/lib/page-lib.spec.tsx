import { render } from '@testing-library/react';
import React from 'react';
import { PageLib } from './page-lib';

describe('PageLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLib />);
    expect(baseElement).toBeTruthy();
  });
  it('should display page lib', () => {
    const { getByText } = render(<PageLib />);
    expect(getByText('This is a Page-lib!')).toBeTruthy();
  });
});
