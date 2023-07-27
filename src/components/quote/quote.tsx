import { PropsWithChildren } from 'react'
import * as Styled from './styles'

export const Quote = ({ children }: PropsWithChildren) => (
  <Styled.Quote>{children}</Styled.Quote>
)
