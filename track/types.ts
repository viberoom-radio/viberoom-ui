import { MediaEntity } from 'shared/types/media-entity';

export type Props = {
  artist?: {
    name: string;
    handle: string;
  };
  artwork?: MediaEntity;
  title?: string;
};
