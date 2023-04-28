import { Track } from 'shared/types/track';

export type Props = {
  tracks: Track[];
  highlightedTrackId?: Track['id'];
};
