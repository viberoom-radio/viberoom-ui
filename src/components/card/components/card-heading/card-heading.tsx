import { Props } from './types'
import * as Styled from './styles'

export const CardHeading = ({ children }: Props) => (
  <Styled.CardHeading>
    <Styled.CardTitle>{children}</Styled.CardTitle>
  </Styled.CardHeading>
)
