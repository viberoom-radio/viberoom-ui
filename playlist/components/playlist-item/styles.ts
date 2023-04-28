import styled, { css } from 'styled-components';
import { colors } from 'constants/colors';
import { StyledProps } from './types';

const highlightedStyles = css`
  background-color: ${colors.bg.secondary};
`;

export const PlaylistItem = styled.li<StyledProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.4rem;

  ${({ isHighlighted }) => isHighlighted && highlightedStyles}
`;
