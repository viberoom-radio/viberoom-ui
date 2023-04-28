import React from 'react';
import { SvgProps } from '../../types';

export const PauseCircleIcon = ({
  color = 'currentColor',
  size = 24,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 379 379"
    fill="#fff"
    stroke={color}
  >
    <path d="M323.5,55.5c-74-74-194-74-268,0s-74,194,0,268s194,74,268,0S397.5,129.5,323.5,55.5z M167.5,231.5c0,16-12.8,28.8-28.8,28.8s-28.8-12.8-28.8-28.8v-84c0-16,12.8-28.8,28.8-28.8s28.8,12.8,28.8,28.8V231.5z M269.5,231.5c0,16-12.8,28.8-28.8,28.8s-28.8-12.8-28.8-28.8v-84c0-16,12.8-28.8,28.8-28.8s28.8,12.8,28.8,28.8V231.5z" />
  </svg>
);
