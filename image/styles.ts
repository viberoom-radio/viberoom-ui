import styled, { css, keyframes } from 'styled-components';
import { colors } from 'constants/colors';
import { StyledProps } from './types';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const loadingStyles = css`
  &::before {
    content: ' ';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      ${colors.bg.default} 0,
      #142b46 20%,
      #265488 60%,
      ${colors.bg.default}
    );
    animation: ${shimmer} 2s infinite;
  }
`;

const squareStyles = css`
  &:after {
    content: ' ';
    display: block;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

const roundStyles = css`
  border-radius: 10rem;
`;

export const Image = styled.div<StyledProps>`
  overflow: hidden;
  position: relative;
  display: block;
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.4rem;

  ${({ isLoading }) => isLoading && loadingStyles}

  ${({ isSquare }) => isSquare && squareStyles}
  
  ${({ isRound }) => isRound && roundStyles}
  
  img {
    width: 100%;
    height: 100%;
  }
`;
