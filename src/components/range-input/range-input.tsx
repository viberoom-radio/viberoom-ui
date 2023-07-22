import { RefObject, forwardRef } from 'react';
import * as Styled from './styles';
import { Props } from './types';

const Range = (
  { min = 0, max = 1, value = 0, step = 0.01, onChange }: Props,
  ref: RefObject<HTMLInputElement>
) => (
  <Styled.RangeInput
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={onChange}
    ref={ref}
  />
);

export const RangeInput = forwardRef(Range);
