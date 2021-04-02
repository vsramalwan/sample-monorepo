import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
  it('should display footer', ()=>{
    const {getByText}=render(<Footer />)
    expect(getByText('This is footer!')).toBeTruthy()
  })
});
