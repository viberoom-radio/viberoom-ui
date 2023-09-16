import { Button } from '../button';
import { Icon } from '../icon';
import { ModalHeader } from './components/modal-header';
import { ModalContent } from './components/modal-content';
import * as Styled from './styles';
import { Props } from './types';

export const Modal = ({ isShown = false, close, children }: Props) => {
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
