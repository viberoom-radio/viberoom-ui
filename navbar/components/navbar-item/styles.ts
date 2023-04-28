import { colors } from 'constants/colors';
import styled, { css } from 'styled-components';
import { StyledProps } from './types';

export const NavbarText = styled.small`
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  font-size: 0.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  line-height: 3;
  user-select: none;
  transition: transform 0.1s;
  transform: translateX(-200px);

  @media only screen and (max-width: 768px) {
    margin-bottom: 0;
    transform: translateX(0);
  }
`;

export const NavbarItem = styled.li`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  margin: 0;
  min-height: 3rem;

  &:nth-child(2) ${NavbarText} {
    transition-delay: 0.02s;
  }

  &:nth-child(3) ${NavbarText} {
    transition-delay: 0.04s;
  }

  &:nth-child(4) ${NavbarText} {
    transition-delay: 0.06s;
  }

  &:nth-child(5) ${NavbarText} {
    transition-delay: 0.08s;
  }

  &:nth-child(6) ${NavbarText} {
    transition-delay: 0.1s;
  }
`;

const activeStyles = css`
  color: ${colors.typo.primary};

  &:link,
  &:active,
  &:visited {
    color: ${colors.typo.primary};
  }
`;

export const NavbarLink = styled.a<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 0.4rem;
  color: ${colors.typo.secondary};
  text-decoration: none;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  transition: color 0.1s;

  &:link,
  &:active,
  &:visited {
    color: ${colors.typo.secondary};
  }

  &:focus,
  &:hover {
    color: ${colors.typo.primary};
  }

  ${({ isActive }) => isActive && activeStyles}
`;
