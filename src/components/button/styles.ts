import styled, { css } from "styled-components";
import { palette } from "../../styles/theme";
import { StyledProps } from "./types";

export const ButtonIcon = styled.span`
  display: inline-flex;
`;

export const ButtonIconRight = styled(ButtonIcon)`
  opacity: 0.4;
`;

const fluidStyles = css`
  position: relative;
  display: flex;
  width: 100%;

  ${ButtonIcon} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.4rem;
  }

  ${ButtonIconRight} {
    left: auto;
    right: 0.4rem;
  }
`;

const plainStyles = css`
  height: auto;
  padding: 0;
`;

const disabledStyles = css`
  pointer-events: none;
  opacity: 0.4;
`;

export const Button = styled.button<StyledProps>`
  position: static;
  display: inline-flex;
  align-items: center;
  min-width: 2.2rem;
  width: auto;
  height: 2.2rem;
  padding: 0.4rem;
  border: none;
  border-radius: 0.2rem;
  justify-content: center;
  color: ${palette.typo.primary};
  background-color: ${({ $color }) => palette.bg[$color]};
  white-space: nowrap;
  cursor: pointer;
  box-shadow: ${({ $color }) =>
    $color === "transparent" ? "none" : `0 4px 4px -4px ${palette.bg.default}`};

  &:link,
  &:hover {
    color: ${palette.typo.primary};
    text-decoration: none;
  }

  &:focus,
  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${palette.brand};
  }

  ${({ isPlain }) => isPlain && plainStyles}

  ${({ isDisabled }) => isDisabled && disabledStyles}

  ${({ isFluid }) => isFluid && fluidStyles}
  
  @media only screen and (max-width: 768px) {
    ${({ isFluidMobile }) => isFluidMobile && fluidStyles}
  }
`;

export const ButtonText = styled.span`
  padding: 0 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.7;
`;
