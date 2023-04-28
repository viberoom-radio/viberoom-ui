import { Host } from 'types/Host';
import { Track } from 'types/Track';

export type Props = {
  host: string;
  tracks: Track[];
  isPlaying: boolean;
  device: {
    isMobile: boolean;
  };
  setIsPlaying: (state: boolean) => void;
};

export type PlayerContextProps = {
  isPlaying?: boolean;
  setIsPlaying?: (value: boolean) => void;
  tracks: Track[];
  host: Host;
};
