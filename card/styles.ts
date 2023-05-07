import styled, { css } from 'styled-components';
import { palette } from 'shared/styles/theme';
import { Props } from './types';

const centeredStyles = css`
  text-align: center;
`;

const primaryStyles = css`
  background-color: ${palette.bg.secondary};
`;

export const Card = styled.div<Props>`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${palette.bg.border};
  border-radius: 0.4rem;

  @media only screen and (max-width: 768px) {
    background: transparent;
  }

  ${({ align }) => align === 'center' && centeredStyles};

  ${({ isPrimary }) => isPrimary && primaryStyles};
`;
