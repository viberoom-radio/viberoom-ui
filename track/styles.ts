import { colors } from 'shared/constants/colors';
import styled from 'styled-components';

export const Track = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  user-select: none;
  transition: all 0.2s;
`;

export const TrackArtwork = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: 0 1rem 0 0;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 4px -4px ${colors.bg.default};
`;

export const TrackInfo = styled.ul`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TrackTitle = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
  font-size: 1rem;
`;

export const TrackArtist = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.8;
  font-weight: 500;
  font-size: 0.8rem;
`;
