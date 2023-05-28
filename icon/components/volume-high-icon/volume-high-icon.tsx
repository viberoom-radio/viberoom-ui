import { SvgProps } from '../../types';

export const VolumeHighIcon = ({
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
    <path d="M22.5 9.5C23.3536 10.3536 24.0308 11.3669 24.4928 12.4822C24.9548 13.5975 25.1925 14.7928 25.1925 16C25.1925 17.2072 24.9548 18.4025 24.4928 19.5178C24.0308 20.6331 23.3536 21.6464 22.5 22.5M19 12C20.0608 13.0609 20.6568 14.4997 20.6568 16C20.6568 17.5003 20.0608 18.9391 19 20" />
  </svg>
);
