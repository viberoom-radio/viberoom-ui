import React from 'react';
import { Track } from 'shared/ui/track';
import { Input } from 'shared/ui/input';
import { ShareMenu } from 'shared/ui/share-menu';
import { getShareMetadata } from 'shared/utils/track';

export const TrackModal = ({ track }) => (
  <>
    <Track {...track} />

    <br />

    <Input defaultValue={getShareMetadata(track).url} />

    <hr />
    <ShareMenu track={track} />
  </>
);
