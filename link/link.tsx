import React from 'react';
import NextLink from 'next/link';
import { Icon } from 'shared/ui/icon';
import { Props } from './types';
import * as Styled from './styles';

export const Link = ({ href, children }: Props) => {
  const isWithChildren = Boolean(children);
  const isInternal = href && href[0] === '/';

  const renderIcon = () => {
    if (!isInternal) {
      return (
        <Styled.LinkIcon>
          <Icon name="ArrowUpRight" />
        </Styled.LinkIcon>
      );
    }

    return null;
  };

  if (!isWithChildren) {
    return null;
  }

  if (isInternal) {
    return (
      <NextLink href={href} passHref>
        <Styled.Link onClick={(event) => event.stopPropagation()}>
          {children}
          {renderIcon()}
        </Styled.Link>
      </NextLink>
    );
  }

  return (
    <Styled.Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
      {renderIcon()}
    </Styled.Link>
  );
};
