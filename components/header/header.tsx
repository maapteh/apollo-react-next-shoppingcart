import React from 'react';
import Link from 'next/link';
import {BasketItems} from '../basket/items/basket-items';

import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img
        src="/static/9cc2b5e4.svg"
        alt="Albert Heijn Logo"
        className="header__logo"
      />
      <Link prefetch href="/">
        <a className="header__link">Home</a>
      </Link>
      <Link prefetch href="/about">
        <a className="header__link">About</a>
      </Link>
      <Link prefetch href="/order">
        <a>
          <BasketItems />
        </a>
      </Link>
    </header>
  );
};
