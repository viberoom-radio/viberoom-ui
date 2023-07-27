import { SvgProps } from '../../types'

export const VolumeLowIcon = ({
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
    <path d="M19 12C20.0608 13.0609 20.6568 14.4997 20.6568 16C20.6568 17.5003 20.0608 18.9391 19 20" />
  </svg>
)
