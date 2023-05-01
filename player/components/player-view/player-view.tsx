import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { PlayButton } from 'features/play-button';
import { VolumeControl } from 'features/volume-control';
import { Track } from 'entities/track';
import { Track as TrackEntity } from 'shared/types/track';
import { generateTrackURL, getNextTrackIndex, updateMetadata } from './utils';
import { Props } from '../../types';
import * as Styled from './styles';
import { TrackInfoControl } from 'features/current-track-info';

export const PlayerView = ({
  tracks,
  isPlaying,
  host,
  setIsPlaying,
}: Props) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [nextTrackIndex, setNextTrackIndex] = useState(1);
  // const [currentTime, setCurrentTime] = useState(0);
  const track = tracks[currentTrackIndex];
  const isLoading = !track;
  let audio = useRef<Howl>(null);
  let audioNext = useRef<Howl>(null);
  // Cache previous props value to ignore component render caused by HMR
  let wasPlaying = useRef(false);

  const onLoaded = () => {
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
    setNextTrackIndex(newNextTrackIndex);
    audioNext.current = createAudio(nextTrack);

    updateMetadata(track, { play: togglePlay, pause: togglePlay });
  };

  const createAudio = (track: TrackEntity) => {
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

  return (
    <>
      <Styled.Player>
        <Styled.PlayButton>
          <PlayButton track={track} />
        </Styled.PlayButton>

        <Styled.Track>
          <Track {...track} />
        </Styled.Track>

        {!isLoading && (
          <Styled.ExtraControls>
            <Styled.VolumeControl>
              <VolumeControl />
            </Styled.VolumeControl>
            <Styled.TrackInfoControl>
              <TrackInfoControl track={track} />
            </Styled.TrackInfoControl>
          </Styled.ExtraControls>
        )}

        {/* {!isLoading && (
          <Styled.ProgressBar
            style={{
              width: (currentTime / track.duration) * 100 + '%',
            }}
          />
        )} */}
      </Styled.Player>
    </>
  );
};
