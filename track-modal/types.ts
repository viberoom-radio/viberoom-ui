import { MediaEntity } from 'shared/types/media-entity';

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
