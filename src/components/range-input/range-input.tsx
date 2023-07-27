import { ForwardedRef, forwardRef } from "react";
import * as Styled from "./styles";
import { Props } from "./types";

export const RangeInput = forwardRef(
  (
    { min = 0, max = 1, value = 0, step = 0.01, onChange }: Props,
    ref: ForwardedRef<HTMLInputElement>
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
  )
);

RangeInput.displayName = "RangeInput";
