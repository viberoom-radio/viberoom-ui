import React from 'react';
import { Props } from './types';
import * as Styled from './styles';

export const PlaylistItem = ({ isHighlighted = false, children }: Props) => (
  <Styled.PlaylistItem isHighlighted={isHighlighted}>
    {children}
  </Styled.PlaylistItem>
);
