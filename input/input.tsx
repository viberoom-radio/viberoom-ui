import React, { FocusEvent, MouseEvent } from 'react';
import * as Styled from './styles';
import { Props } from './types';

export const Input = ({ defaultValue = '' }: Props) => {
  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return <Styled.Input defaultValue={defaultValue} onFocus={onFocus} />;
};
