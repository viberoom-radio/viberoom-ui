import React from 'react';
import { Props } from './types';
import * as Styled from './styles';

export const GridCell = ({ span, spanSmall, spanLarge, children }: Props) => (
  <Styled.GridCell $span={span} $spanSmall={spanSmall} $spanLarge={spanLarge}>
    {children}
  </Styled.GridCell>
);
