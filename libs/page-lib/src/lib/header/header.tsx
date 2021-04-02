import React from 'react';

import './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div>
      <h1>This is header!</h1>
    </div>
  );
}

export default Header;
