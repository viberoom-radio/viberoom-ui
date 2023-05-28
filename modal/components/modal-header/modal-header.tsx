import * as Styled from './styles';

export const ModalHeader = ({ children }) => (
  <Styled.ModalHeader>
    <Styled.ModalTitle>{children}</Styled.ModalTitle>
  </Styled.ModalHeader>
);
