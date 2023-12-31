import * as Icons from './components';
import { Props } from './types';

export const Icon = ({ name, color, size = 24 }: Props) => {
  const IconElement = Icons[name];

  return <IconElement size={size} color={color} />;
};
