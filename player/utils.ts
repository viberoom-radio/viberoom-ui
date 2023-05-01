import { Howl } from 'howler';
import { Host } from 'shared/types/host';
import { Track } from 'shared/types/track';
import { AUDIUS_APP_NAME } from './constants';

/**
 * Transforms track data to a MediaMetadata object for displaying
 * in the MediaSession UI (e.g. player widget on mobile devices)
 * @param track track data
 * @returns MediaMetadata object
 */
const getMediaMetadata = ({ artist, title, artwork }: Track) => {
  const metadata = {
    artist: artist.name,
    title: title,
    album: 'Viberoom Radio',
    artwork: [
      { src: artwork.small, sizes: '150x150', type: 'image/jpeg' },
      { src: artwork.medium, sizes: '480x480', type: 'image/jpeg' },
    ],
  } as MediaMetadataInit;

  return metadata;
};

/**
 * Calculates index of the next track to be played.
 * @param currentIndex current track index
 * @param totalCount total tracks count
 * @returns index of the next track
 */
export const getNextTrackIndex = (currentIndex: number, totalCount: number) => {
  const firstIndex = 0;
  const lastIndex = totalCount - 1;
  const possibleIndex = currentIndex + 1;
  const nextTrackIndex = possibleIndex > lastIndex ? firstIndex : possibleIndex;

  return nextTrackIndex;
};

/**
 * Creates the track streaming URL
 * @param host audius host URL
 * @param trackId track id
 * @returns {string} streaming URL
 */
export const generateTrackURL = (host: Host, trackId: Track['id']): string =>
  `${host}/v1/tracks/${trackId}/stream?app_name=${AUDIUS_APP_NAME}`;

export const updateMetadata = (
  track: Track,
  {
    play = null,
    pause = null,
    previoustrack = null,
    nexttrack = null,
    stop = null,
    seekbackward = null,
    seekforward = null,
    seekto = null,
  }: Partial<Record<MediaSessionAction, MediaSessionActionHandler>>
) => {
  const metadata = getMediaMetadata(track);

  if ('mediaSession' in navigator && window.MediaMetadata) {
    navigator.mediaSession.metadata = new window.MediaMetadata(metadata);
    navigator.mediaSession.setActionHandler('play', play);
    navigator.mediaSession.setActionHandler('pause', pause);
    navigator.mediaSession.setActionHandler('previoustrack', previoustrack);
    navigator.mediaSession.setActionHandler('nexttrack', nexttrack);
    navigator.mediaSession.setActionHandler('stop', stop);
    navigator.mediaSession.setActionHandler('seekbackward', seekbackward);
    navigator.mediaSession.setActionHandler('seekforward', seekforward);
    navigator.mediaSession.setActionHandler('seekto', seekto);
  }
};
