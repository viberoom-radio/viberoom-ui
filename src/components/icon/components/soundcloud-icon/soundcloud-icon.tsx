import { SvgProps } from '../../types'

export const SoundcloudIcon = ({
  color = 'currentColor',
  size = 24,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill={color}
    stroke="none"
  >
    <path d="M3 34.7c.6.399 1.3.8 2 1V22.3c-.7.2-1.4.5-2 1V34.7zM14 16.5c-.7.3-1.4.6-2 1V36h2V16.5zM8 36V22.1C7.7 22 7.3 22 7 22s-.7 0-1 .1v13.8C6.3 36 6.7 36 7 36H8zM2 24.1c-1.2 1.3-2 3-2 4.9s.8 3.6 2 4.9V24.1zM20 16.5c-.6-.2-1.3-.4-2-.5v20h2V16.5zM9 20.9V36h2V18.3C10.2 19 9.5 19.9 9 20.9zM17 16c-.7 0-1.4.1-2 .2V36h2V16z" />
    <g>
      <path d="M42.5,21c-0.5,0-1,0.1-1.5,0.2C40.5,15.5,35.8,11,30,11c-3.6,0-7,1.8-9,4.7V36h21.5c4.1,0,7.5-3.4,7.5-7.5C50,24.4,46.6,21,42.5,21z" />
    </g>
  </svg>
)
