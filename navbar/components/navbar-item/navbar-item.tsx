import React from 'react';
import Link from 'next/link';
import { Icon } from 'shared/ui/icon';
import { Props } from './types';
import * as Styled from './styles';

export const NavbarItem = ({
  href = '#',
  icon,
  iconSize = 40,
  text,
  isActive = false,
}: Props) => (
  <Styled.NavbarItem>
    <Link href={href}>
      <Styled.NavbarLink isActive={isActive}>
        {icon && <Icon name={icon} size={iconSize} />}
        {text && <Styled.NavbarText>{text}</Styled.NavbarText>}
      </Styled.NavbarLink>
    </Link>
  </Styled.NavbarItem>
);
