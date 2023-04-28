import React from 'react';
import { Track } from 'shared/ui/track';
import { PlaylistItem } from './components/playlist-item';
import { Props } from './types';
import * as Styled from './styles';

export const Playlist = ({ tracks, highlightedTrackId }: Props) => (
  <Styled.Playlist>
    {tracks.map((track) => (
      <PlaylistItem
        key={track.id}
        isHighlighted={track.id === highlightedTrackId}
      >
        <Track {...track} />
      </PlaylistItem>
    ))}
  </Styled.Playlist>
);
