import { Button } from 'shared/ui/button';
import { IOS_APP_URL } from './constants';
import { IosBadgetIcon } from './components';

export const IosBadge = () => (
  <Button href={IOS_APP_URL} isPlain color="transparent">
    <IosBadgetIcon />
  </Button>
);
