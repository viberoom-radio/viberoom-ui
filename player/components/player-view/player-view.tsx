import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';
import { TrackModal } from 'shared/ui/track-modal';
import { VolumeControl } from 'shared/ui/volume-control';
import { Track } from 'entities/track';
import { Track as TrackEntity } from 'shared/types/track';
import {
  generateTrackURL,
  getNextTrackIndex,
  updateMetadata,
  vibrate,
} from './utils';
import { Props } from '../../types';
import * as Styled from './styles';

export const PlayerView = ({
  tracks,
  isPlaying,
  host,
  device,
  setIsPlaying,
}: Props) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [nextTrackIndex, setNextTrackIndex] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [isTrackModalShown, setIsTrackModalShown] = useState(false);
  const track = tracks[currentTrackIndex];
  const playIcon = !track
    ? 'play-circle-loading'
    : isPlaying
    ? 'pause-circle'
    : 'play-circle';
  const playText = !track ? 'Player is loading' : isPlaying ? 'Pause' : 'Play';
  const isDisabled = !track;
  const isClickable = device.isMobile && !isDisabled;
  let audio = useRef<Howl>(null);
  let audioNext = useRef<Howl>(null);
  // Cache previous props value to ignore component render caused by HMR
  let wasPlaying = useRef(false);

  const openTrackModal = () => {
    setIsTrackModalShown(true);
  };

  const closeTrackModal = () => {
    setIsTrackModalShown(false);
  };

  const onTrackClick = () => {
    if (!isClickable) {
      return;
    }

    openTrackModal();
  };

  const onPlayerStateToggle = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    togglePlay();
  };

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

  const togglePlay = () => {
    vibrate();
    setIsPlaying(!isPlaying);
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
      <Styled.Player onClick={onTrackClick}>
        <Styled.PlayerPlay>
          <Button
            icon={playIcon}
            iconSize={50}
            color="transparent"
            onClick={onPlayerStateToggle}
            isPlain={true}
            isDisabled={isDisabled}
            ariaLabel={playText}
          />
        </Styled.PlayerPlay>

        <Styled.PlayerTrack>
          <Track {...track} />
        </Styled.PlayerTrack>

        {!isDisabled && (
          <Styled.PlayerExtra>
            <Styled.PlayerVolumeControl>
              <VolumeControl />
            </Styled.PlayerVolumeControl>
            <Styled.PlayerMore>
              <Button
                icon="chevron-up"
                color="transparent"
                onClick={openTrackModal}
                ariaLabel="Share playing track..."
              />
            </Styled.PlayerMore>
          </Styled.PlayerExtra>
        )}

        {!isDisabled && (
          <Styled.PlayerProgress
            style={{
              width: (currentTime / track.duration) * 100 + '%',
            }}
          />
        )}
      </Styled.Player>
      <Modal isShown={isTrackModalShown} close={closeTrackModal}>
        <Modal.Content>
          <TrackModal track={track} />
        </Modal.Content>
      </Modal>
    </>
  );
};
