import React, { FocusEvent } from 'react';
import * as Styled from './styles';

export const Input = (props) => {
  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return (
    <Styled.Input
      onClick={onFocus}
      onFocus={onFocus}
      ref={props.ref}
      {...props}
    />
  );
};
