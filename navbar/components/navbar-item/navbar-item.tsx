import Link from 'next/link';
import { Props } from './types';
import * as Styled from './styles';

export const NavbarItem = ({
  href = '#',
  icon,
  text,
  isActive = false,
}: Props) => (
  <Styled.NavbarItem>
    <Link href={href}>
      <Styled.NavbarLink isActive={isActive}>
        {icon}
        {text && <Styled.NavbarText>{text}</Styled.NavbarText>}
      </Styled.NavbarLink>
    </Link>
  </Styled.NavbarItem>
);
