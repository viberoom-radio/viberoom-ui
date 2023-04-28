import { MediaEntity } from 'types/MediaEntity';

export type Props = {
  track: {
    artist?: {
      name: string;
      handle: string;
    };
    artwork?: MediaEntity;
    title?: string;
  };
};
