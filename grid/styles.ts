/* Based on Raster v20 (dev package) (rsms.me/raster) */

import styled from 'styled-components';
import { typography } from 'shared/styles/theme';
import { StyledProps } from './types';

export const Grid = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr);`};
  grid-column-gap: calc(${typography.lineHeight} * ${typography.fontSize});
  grid-row-gap: calc(${typography.lineHeight} * ${typography.fontSize});

  @media only screen and (min-width: 1199px) {
    grid-template-columns: ${({ columnsLarge }) =>
      `repeat(${columnsLarge}, 1fr);`};
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: ${({ columnsSmall }) =>
      `repeat(${columnsSmall}, 1fr);`};
  }
`;
