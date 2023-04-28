import { colors } from 'constants/colors';
import styled from 'styled-components';

export const VolumeControl = styled.div`
  position: relative;
`;

export const VolumeControlDropdown = styled.div`
  position: absolute;
  left: 50%;
  bottom: 3.5rem;
  transform: translateX(-50%) rotate(270deg);
  transform-origin: center center;
  padding: 0 0 0 3rem;
`;

export const VolumeControlBackdrop = styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${colors.bg.border};
  border: 1px solid ${colors.bg.default};
  border-radius: 0.2rem;
`;

export const VolumeControlRange = styled.input`
  appearance: none;
  border-radius: 1rem;
  background-color: ${colors.typo.ghost};
  height: 4px;
  width: 6rem;
  cursor: grab;

  &::-webkit-slider-thumb {
    appearance: none;
    border: none;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    background-color: white;
  }
`;

export const VolumeControlButton = styled.div``;
