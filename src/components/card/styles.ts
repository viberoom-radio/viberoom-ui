import styled, { css } from 'styled-components';
import { palette } from '../../styles/theme';
import type { StyledProps } from './types';

const centeredStyles = css`
  text-align: center;
`;

const primaryStyles = css`
  background-color: ${palette.bg.secondary};
  border: none;
`;

export const Card = styled.div<StyledProps>`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${palette.bg.border};
  border-radius: 0.5rem;
  border: 1px solid ${palette.bg.secondary};

  @media only screen and (max-width: 768px) {
    background: transparent;
    border: none;
  }

  ${({ $align }) => $align === 'center' && centeredStyles};

  ${({ $isPrimary }) => $isPrimary && primaryStyles};
`;
