import { Track } from 'types/Track';

export type Props = {
  tracks: Track[];
  highlightedTrackId?: Track['id'];
};
