import { ReactNode } from 'react'

export type Props = {
  children: ReactNode[]
  isStacked?: boolean
}

export type StyledProps = {
  $isStacked?: boolean
}
