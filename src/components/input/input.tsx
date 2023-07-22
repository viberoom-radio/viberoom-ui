import { FocusEvent } from 'react';
import * as Styled from './styles';
import { Props } from './types';

export const Input = ({ defaultValue = '', onCopy }: Props) => {
  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <Styled.Input
      defaultValue={defaultValue}
      onFocus={onFocus}
      onCopy={onCopy}
    />
  );
};
