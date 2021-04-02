import React from 'react';

import './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div>
      <h3>This is header!</h3>
    </div>
  );
}

export default Header;
