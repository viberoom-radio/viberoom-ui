import styled from 'styled-components';
import { colors } from 'constants/colors';
import { typography } from 'constants/typography';

export const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0.8rem;
  background-color: ${colors.bg.secondary};
  border: none;
  border-radius: 0.2rem;
  color: ${colors.typo.secondary};
  font-size: ${typography.fontSize};
  transition: color 0.1s, border-color 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    color: ${colors.typo.primary};
    outline: 2px solid ${colors.brand};
  }
`;
