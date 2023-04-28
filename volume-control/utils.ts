import { VOLUME_LOW, VOLUME_NONE } from './constants';

export const getIconName = (volumeLevel: number) => {
  if (volumeLevel === VOLUME_NONE) {
    return 'volume-none';
  }

  if (volumeLevel <= VOLUME_LOW) {
    return 'volume-low';
  }

  return 'volume-high';
};
