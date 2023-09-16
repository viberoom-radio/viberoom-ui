import styled from 'styled-components';
import { palette } from '../../styles/theme';

export const RangeInput = styled.input`
  appearance: none;
  border-radius: 1rem;
  background-color: ${palette.typo.ghost};
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
