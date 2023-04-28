import { colors } from 'shared/constants/colors';
import styled from 'styled-components';

export const Player = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.2rem 1rem 0;

  @media only screen and (max-width: 768px) {
    padding: 0.4rem;
    background: ${colors.bg.secondary};
    border-radius: 0.4rem;
    box-shadow: 0 4px 4px -4px ${colors.bg.default};
  }
`;

export const PlayerPlay = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 5rem;
  margin-right: 1rem;

  @media only screen and (max-width: 768px) {
    width: 3rem;
  }
`;

export const PlayerTrack = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

export const PlayerExtra = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const PlayerVolumeControl = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const PlayerProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.1rem;
  background: ${colors.brand};
`;

export const PlayerMore = styled.div``;
