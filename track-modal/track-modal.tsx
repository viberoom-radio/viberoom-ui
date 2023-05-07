import React from 'react';
import { Track } from 'entities/track/ui/track';
import { Input } from 'shared/ui/input';
import { ShareTrack } from 'features/share-track';
import { getTrackPageUrl } from 'shared/utils/track';
import { Props } from './types';

export const TrackModal = ({ track }: Props) => {
  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Track {...track} />

      <br />

      <Input defaultValue={getTrackPageUrl(track.artist.handle, track.id)} />

      <hr />
      <ShareTrack track={track} />
    </>
  );
};
