import { PropsWithChildren } from 'react'
import * as Styled from './styles'

export const ModalHeader = ({ children }: PropsWithChildren) => (
  <Styled.ModalHeader>
    <Styled.ModalTitle>{children}</Styled.ModalTitle>
  </Styled.ModalHeader>
)
