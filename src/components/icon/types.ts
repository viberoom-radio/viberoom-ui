import * as Icons from './components'

export type IconName = keyof typeof Icons

export type Props = {
  name: IconName
  size?: number
  color?: string
}

export type SvgProps = {
  color?: string
  size?: number
}
