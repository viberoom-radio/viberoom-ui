import React from 'react';
import { useRouter } from 'next/router';
import { NavbarItem } from './components/navbar-item';
import { menuItems } from './config';
import * as Styled from './styles';

export const Navbar = () => {
  const router = useRouter();
  const items = menuItems.map((item) => ({
    ...item,
    isActive: item.href === router.pathname,
  }));

  return (
    <Styled.Navbar>
      <Styled.NavbarList>
        {items.map((item, index) => (
          <NavbarItem {...item} key={index} />
        ))}
      </Styled.NavbarList>
    </Styled.Navbar>
  );
};
