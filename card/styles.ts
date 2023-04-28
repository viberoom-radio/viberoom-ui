import styled, { css } from 'styled-components';
import { colors } from 'constants/colors';
import { Props } from './types';

const centeredStyles = css`
  text-align: center;
`;

const primaryStyles = css`
  background-color: ${colors.bg.secondary};
`;

export const Card = styled.div<Props>`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${colors.bg.border};
  border-radius: 0.4rem;

  @media only screen and (max-width: 768px) {
    background: transparent;
  }

  ${({ align }) => align === 'center' && centeredStyles};

  ${({ isPrimary }) => isPrimary && primaryStyles};
`;
