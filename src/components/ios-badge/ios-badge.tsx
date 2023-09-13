import { Button } from '../button'
import { IosBadgeIcon } from './components/ios-badge-icon'
import { Props } from './types'

export const IosBadge = ({ url }: Props) => (
  <Button href={url} isPlain color="transparent" icon={<IosBadgeIcon />} />
)
