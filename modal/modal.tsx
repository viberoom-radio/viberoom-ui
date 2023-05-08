import React from 'react';
import { Button } from 'shared/ui/button';
import { Icon } from 'shared/ui/icon';
import { ModalHeader } from './components/modal-header';
import { ModalContent } from './components/modal-content';
import * as Styled from './styles';

export const Modal = ({ isShown = false, close, children }) => {
  if (!isShown) {
    return null;
  }

  return (
    <>
      <Styled.ModalBackdrop onClick={close} />

      <Styled.Modal>
        <Styled.ModalClose>
          <Button
            icon={<Icon name="X" />}
            onClick={close}
            color="transparent"
            ariaLabel="Close dialog"
          />
        </Styled.ModalClose>

        {children}
      </Styled.Modal>
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
