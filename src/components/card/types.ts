import { PropsWithChildren } from 'react'

type CardAlign = 'left' | 'center'

export type Props = PropsWithChildren<{
  align?: CardAlign
  isPrimary?: boolean
}>

export type StyledProps = PropsWithChildren<{
  $align?: CardAlign
  $isPrimary?: boolean
}>
