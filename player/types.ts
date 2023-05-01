import { Host } from 'shared/types/host';
import { Track } from 'shared/types/track';

export type Props = {
  host: string;
  tracks: Track[];
  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;
  currentTrackIndex: number;
  setCurrentTrackIndex: (value: number) => void;
};

export type PlayerContextProps = {
  isPlaying?: boolean;
  setIsPlaying?: (value: boolean) => void;
  tracks: Track[];
  host: Host;
  currentTrackIndex: number;
  setCurrentTrackIndex: (value: number) => void;
};
