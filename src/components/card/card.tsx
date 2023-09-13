import { CardLink } from './components/card-link'
import { CardHeading } from './components/card-heading'
import { CardDescription } from './components/card-description'
import { CardBody } from './components/card-body'
import { CardFooter } from './components/card-footer'
import * as Styled from './styles'
import type { Props } from './types'

export const Card = ({
  children,
  align = 'left',
  isPrimary = false,
}: Props) => (
  <Styled.Card $align={align} $isPrimary={isPrimary}>
    {children}
  </Styled.Card>
)

Card.Link = CardLink
Card.Heading = CardHeading
Card.Description = CardDescription
Card.Body = CardBody
Card.Footer = CardFooter
