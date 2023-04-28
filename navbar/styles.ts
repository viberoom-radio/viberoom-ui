import styled from 'styled-components';
import { NavbarText } from './components/navbar-item/styles';

export const Navbar = styled.div`
  width: 100%;

  &:hover {
    ${NavbarText} {
      transform: translateX(0);
    }
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  @media only screen and (min-width: 769px) {
    flex-wrap: wrap;
  }
`;
