import React from 'react';
import { CardLink } from './components/CardLink';
import { CardHeading } from './components/CardHeading';
import { CardDescription } from './components/CardDescription';
import { CardBody } from './components/CardBody';
import { CardFooter } from './components/CardFooter';
import { Props } from './types';
import * as Styled from './styles';

export const Card = ({
  children,
  align = 'left',
  isPrimary = false,
}: Props) => (
  <Styled.Card align={align} isPrimary={isPrimary}>
    {children}
  </Styled.Card>
);

Card.Link = CardLink;
Card.Heading = CardHeading;
Card.Description = CardDescription;
Card.Body = CardBody;
Card.Footer = CardFooter;
