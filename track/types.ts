import { MediaEntity } from 'types/MediaEntity';

export type Props = {
  artist?: {
    name: string;
    handle: string;
  };
  artwork?: MediaEntity;
  title?: string;
};
