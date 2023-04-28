import React from 'react';
import { Track } from 'components/Track';
import { PlaylistItem } from './components/PlaylistItem';
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
