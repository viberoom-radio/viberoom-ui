import { SvgProps } from '../../types';

export const PlayCircleIcon = ({
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
    <path
      d="M323.5,55.5c-74-74-194-74-268,0s-74,194,0,268s194,74,268,0S397.5,129.5,323.5,55.5z M272.3,201.1l-59.2,34l-58,33.6
			c-2,1.6-4.8,2.4-7.6,2.4c-7.6,0-13.6-6-13.6-13.6v-68v-68.4c0-2.4,0.4-4.4,1.6-6.8c3.6-6.4,12-8.8,18.4-4.8l58.4,33.6
			c0.4,0,0.4,0.4,0.8,0.4l59.2,34c2,1.2,3.6,2.8,5.2,4.8C281.1,189.1,278.7,197.5,272.3,201.1z"
    />
  </svg>
);
