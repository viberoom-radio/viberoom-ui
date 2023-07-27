import { SvgProps } from '../../types'

export const BandcampIcon = ({
  color = 'currentColor',
  size = 24,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    stroke="none"
  >
    <path d="M22 6l-6.5 12H2L8.5 6H22z" />
  </svg>
)
