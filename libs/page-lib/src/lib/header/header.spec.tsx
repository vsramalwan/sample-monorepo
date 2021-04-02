import React from 'react';
import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });
  it('should display header', ()=>{
    const {getByText}=render(<Header />)
    expect(getByText('This is header!')).toBeTruthy()
  })
});
