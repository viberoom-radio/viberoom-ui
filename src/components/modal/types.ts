import { PropsWithChildren } from 'react'

export type Props = PropsWithChildren<{
  isShown: boolean
  close: () => void
}>
