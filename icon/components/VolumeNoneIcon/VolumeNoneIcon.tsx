import React from 'react';
import { SvgProps } from '../../types';

export const VolumeNoneIcon = ({
  color = 'currentColor',
  size = 24,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13H7V19H10L15 23V9L10 13Z" />
    <path d="M19 13.5L24 18.5M24 13.5L19 18.5" />
  </svg>
);
