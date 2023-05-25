import React from 'react';
import { Track } from 'entities/track/ui/track';
import { Input } from 'shared/ui/input';
import { ShareTrack } from 'features/share-track';
import { EventType, useAmplitude } from 'features/amplitude';
import { getTrackPageUrl } from 'shared/utils/track';
import { Props } from './types';

export const TrackModal = ({ track }: Props) => {
  const amplitude = useAmplitude();

  const handleCopy = () => {
    amplitude?.track(EventType.COPY_TRACK_URL, { id: track.id });
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Track {...track} />

      <br />

      <Input
        defaultValue={getTrackPageUrl(track.artist.handle, track.id)}
        onCopy={handleCopy}
      />

      <hr />
      <ShareTrack track={track} />
    </>
  );
};
