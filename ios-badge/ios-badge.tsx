import { IOS_APP_URL } from 'shared/constants';
import { Button } from 'shared/ui/button';
import { IosBadgetIcon } from './components';

export const IosBadge = () => (
  <Button
    href={IOS_APP_URL}
    isPlain
    color="transparent"
    icon={<IosBadgetIcon />}
  />
);
