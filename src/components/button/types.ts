import { PropsWithChildren, ReactElement, SyntheticEvent } from 'react'

type ButtonColor = 'primary' | 'secondary' | 'transparent'

export type Props = PropsWithChildren<{
  icon?: ReactElement
  href?: string
  color?: ButtonColor
  isDisabled?: boolean
  isPlain?: boolean
  isFluid?: boolean
  isFluidMobile?: boolean
  onClick?: (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  onFocus?: (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  onBlur?: (e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  onMouseOver?: (
    e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void
  onMouseEnter?: (
    e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void
  onMouseOut?: (
    e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void
  onMouseLeave?: (
    e: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void
  ariaLabel?: string
}>

export type StyledProps = {
  $color: ButtonColor
  isDisabled?: Props['isDisabled']
  isPlain?: Props['isPlain']
  isFluid?: Props['isFluid']
  isFluidMobile?: Props['isFluidMobile']
}
