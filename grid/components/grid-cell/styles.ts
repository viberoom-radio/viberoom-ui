import styled, { css } from 'styled-components';
import { ColumnWidth, StyledProps } from './types';

const columnEndStyles = (columnEnd: ColumnWidth) => css`
  grid-column-end: span ${columnEnd};
`;

export const GridCell = styled.div<StyledProps>`
  display: block;
  appearance: none;

  ${({ $span }) => `grid-column-end: span ${$span};`};

  @media only screen and (min-width: 1199px) {
    ${({ $spanLarge }) => $spanLarge && columnEndStyles($spanLarge)}
  }

  @media only screen and (max-width: 768px) {
    ${({ $spanSmall }) => $spanSmall && columnEndStyles($spanSmall)}
  }
`;
