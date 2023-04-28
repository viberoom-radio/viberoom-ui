import React from 'react';
import NextLink from 'next/link';
import { Props } from './types';
import * as Styled from './styles';

export const CardLink = ({ children, href }: Props) => {
  const isInternal = href && href[0] === '/';

  if (isInternal) {
    return (
      <NextLink href={href} passHref>
        <Styled.CardLink onClick={(event) => event.stopPropagation()}>
          {children}
        </Styled.CardLink>
      </NextLink>
    );
  }

  return (
    <Styled.CardLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Styled.CardLink>
  );
};
