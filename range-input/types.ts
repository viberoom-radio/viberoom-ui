import { ChangeEvent } from 'react';

export type Props = {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
