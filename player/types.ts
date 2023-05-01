import { Track } from 'shared/types/track';

export type Props = {
  host: string;
  tracks: Track[];
  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;
  currentTrackIndex: number;
  setCurrentTrackIndex: (value: number) => void;
};
