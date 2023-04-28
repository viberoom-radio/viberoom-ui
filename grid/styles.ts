/* Based on Raster v20 (dev package) (rsms.me/raster) */

import styled from 'styled-components';
import { typography } from 'constants/typography';
import { StyledProps } from './types';

export const Grid = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr);`};
  grid-column-gap: calc(${typography.lineHeight} * ${typography.fontSize});
  grid-row-gap: calc(${typography.lineHeight} * ${typography.fontSize}); ;
`;
