import styled, { keyframes } from "styled-components";
import { palette } from "../../styles/theme";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translate(-50%, -100%);
    opacity: 0;
  }

  to {
    transform: translate(-50%, -110%);
    opacity: 1;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 40rem;
  padding: 1.5rem;
  background-color: ${palette.bg.default};
  border-radius: 0.4rem;
  z-index: 40;
  box-shadow: 0 4px 4px -4px ${palette.bg.default};

  @media only screen and (max-width: 768px) {
    top: 100%;
    transform: translate(-50%, -110%);
    width: 92vw;
    padding: 1rem 1rem 2rem 1rem;
    animation: ${slideUp} 0.3s;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${palette.bg.tone};
  z-index: 30;
  animation: ${fadeIn} 0.3s;
`;

export const ModalClose = styled.span`
  position: absolute;
  top: -3rem;
  right: 0;
  display: inline-flex;
  background-color: transparent;
  border: 0;
  color: ${palette.typo.primary};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
