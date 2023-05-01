import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  //  useState,
} from 'react';
import { Howl } from 'howler';
import { Track } from 'shared/types/track';
import { generateTrackURL, getNextTrackIndex, updateMetadata } from './utils';
import { PlayerContext } from './player-context';

export const Player = () => {
  const {
    isPlaying,
    setIsPlaying,
    currentTrackIndex,
    setCurrentTrackIndex,
    tracks,
    host,
  } = useContext(PlayerContext);
  // const [currentTime, setCurrentTime] = useState(0);
  const track = tracks[currentTrackIndex];
  const isLoading = !track;
  let audio = useRef<Howl>(null);
  let audioNext = useRef<Howl>(null);
  // Cache previous props value to ignore component render caused by HMR
  let wasPlaying = useRef(false);

  const onLoaded = () => {
    const nextTrackIndex = getNextTrackIndex(currentTrackIndex, tracks.length);
    const nextTrack = tracks[nextTrackIndex];

    if (!audioNext.current || audioNext.current.state() === 'unloaded') {
      setTimeout(() => {
        audioNext.current = createAudio(nextTrack);
      }, 1000);
    }
  };

  // const onTimeUpdate = () => {
  //   setCurrentTime(audio.current.currentTime);
  // };

  const togglePlay = useCallback(() => {
    setIsPlaying(!wasPlaying.current);
  }, [wasPlaying, setIsPlaying]);

  const onEnded = () => {
    const newCurrentTrackIndex = getNextTrackIndex(
      currentTrackIndex,
      tracks.length
    );
    const newNextTrackIndex = getNextTrackIndex(
      newCurrentTrackIndex,
      tracks.length
    );
    const track = tracks[newCurrentTrackIndex];
    const nextTrack = tracks[newNextTrackIndex];

    audio.current.unload();
    audio.current = audioNext.current;
    audio.current.play();
    setCurrentTrackIndex(newCurrentTrackIndex);

    audioNext.current = createAudio(nextTrack);

    updateMetadata(track, { play: togglePlay, pause: togglePlay });
  };

  const createAudio = (track: Track) => {
    const audio = new Howl({
      src: [generateTrackURL(host, track.id)],
      format: ['mp3'],
      html5: true,
      onload: onLoaded,
      onend: onEnded,
    });

    // audio.current.ontimeupdate = onTimeUpdate;

    return audio;
  };

  useEffect(() => {
    if (audio.current === null && tracks.length > 0) {
      audio.current = createAudio(tracks[currentTrackIndex]);
    }
  });

  useEffect(() => {
    const track = tracks[currentTrackIndex];

    if (isPlaying !== wasPlaying.current) {
      wasPlaying.current = isPlaying;

      if (isPlaying) {
        audio.current?.play();
        updateMetadata(track, { play: togglePlay, pause: togglePlay });
      } else {
        audio.current?.pause();
      }
    }
  });

  return <div></div>;
};
