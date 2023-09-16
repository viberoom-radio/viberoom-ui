import styled, { css } from 'styled-components';
import { palette } from '../../styles/theme';
import { StyledProps } from './types';

export const ArtistUserpic = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: 0 1rem 0 0;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 4px -4px ${palette.bg.default};
`;

const smallStyles = css`
  ${ArtistUserpic} {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
  }
`;

export const Artist = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  user-select: none;
  transition: all 0.2s;

  ${({ size }) => size === 'small' && smallStyles}
`;

export const ArtistInfo = styled.ul`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ArtistName = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
`;
