import React, { Component, SyntheticEvent } from 'react';
import { Howl } from 'howler';
import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';
import { Track } from 'entities/track/ui/track';
import { TrackModal } from 'shared/ui/track-modal';
import { VolumeControl } from 'shared/ui/volume-control';
import { generateTrackURL, getMediaMetadata } from 'shared/utils/track';
import { vibrate } from '../../utils';
import { Props } from '../../types';
import * as Styled from './styles';
import { Track as TrackEntity } from 'shared/types/track';

export class PlayerView extends Component<Props> {
  state = {
    currentTrackIndex: 0,
    nextTrackIndex: 1,
    currentTime: 0,
    isTrackModalShown: false,
  };

  audio = null;
  audioNext = null;

  constructor(props: Props) {
    super(props);
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { tracks } = this.props;
    const { currentTrackIndex } = this.state;
    const track = tracks[currentTrackIndex];

    if (this.audio === null && tracks.length > 0) {
      this.audio = this.createAudio(tracks[currentTrackIndex]);
    }

    if (this.props.isPlaying !== nextProps.isPlaying) {
      if (nextProps.isPlaying) {
        this.audio.play();
        this.updateMetadata(track);
      } else {
        this.audio.pause();
      }
    }
  }

  updateMetadata(track: TrackEntity) {
    const metadata = getMediaMetadata(track);

    if ('mediaSession' in navigator && window.MediaMetadata) {
      navigator.mediaSession.metadata = new window.MediaMetadata(metadata);
      navigator.mediaSession.setActionHandler(
        'play',
        this.togglePlay.bind(this)
      );
      navigator.mediaSession.setActionHandler(
        'pause',
        this.togglePlay.bind(this)
      );
      navigator.mediaSession.setActionHandler('previoustrack', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
      navigator.mediaSession.setActionHandler('stop', null);
      navigator.mediaSession.setActionHandler('seekbackward', null);
      navigator.mediaSession.setActionHandler('seekbackward', null);
      navigator.mediaSession.setActionHandler('seekforward', null);
      navigator.mediaSession.setActionHandler('seekto', null);
    }
  }

  createAudio(track: TrackEntity) {
    const { host } = this.props;

    const audio = new Howl({
      src: [generateTrackURL(host, track.id)],
      format: ['mp3'],
      html5: true,
      onload: this.onLoaded.bind(this),
      onend: this.onEnded.bind(this),
    });

    // audio.ontimeupdate = this.onTimeUpdate.bind(this);

    return audio;
  }

  getNextTrackIndex(currentIndex: number) {
    const firstIndex = 0;
    const lastIndex = this.props.tracks.length - 1;
    const possibleIndex = currentIndex + 1;
    const nextTrackIndex =
      possibleIndex > lastIndex ? firstIndex : possibleIndex;

    return nextTrackIndex;
  }

  onPlayerStateToggle(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    this.togglePlay();
  }

  onTrackClick() {
    this.openTrackModal();
  }

  onLoaded() {
    const me = this;
    const { tracks } = this.props;
    const { nextTrackIndex } = this.state;
    const nextTrack = tracks[nextTrackIndex];

    if (!this.audioNext || this.audioNext.state() === 'unloaded') {
      setTimeout(() => {
        me.audioNext = me.createAudio(nextTrack);
      }, 1000);
    }
  }

  onTimeUpdate() {
    const currentTime = this.audio.currentTime;
    this.setState({ currentTime });
  }

  onEnded() {
    const { tracks } = this.props;
    const { currentTrackIndex } = this.state;
    const newCurrentTrackIndex = this.getNextTrackIndex(currentTrackIndex);
    const newNextTrackIndex = this.getNextTrackIndex(newCurrentTrackIndex);
    const track = tracks[newCurrentTrackIndex];
    const nextTrack = tracks[newNextTrackIndex];

    this.audio.unload();
    this.audio = this.audioNext;
    this.audio.play();
    this.setState({
      currentTrackIndex: newCurrentTrackIndex,
      nextTrackIndex: newNextTrackIndex,
    });
    this.audioNext = this.createAudio(nextTrack);

    this.updateMetadata(track);
  }

  togglePlay() {
    vibrate();
    this.props.setIsPlaying(!this.props.isPlaying);
  }

  openTrackModal() {
    this.setState({ isTrackModalShown: true });
  }

  closeTrackModal() {
    this.setState({ isTrackModalShown: false });
  }

  render() {
    const { tracks, isPlaying, device } = this.props;
    const track = tracks[this.state.currentTrackIndex];
    const playIcon = !track
      ? 'play-circle-loading'
      : isPlaying
      ? 'pause-circle'
      : 'play-circle';
    const playText = !track
      ? 'Player is loading'
      : isPlaying
      ? 'Pause'
      : 'Play';
    const isDisabled = !track;
    const isClickable = device.isMobile && !isDisabled;

    return (
      <>
        <Styled.Player
          onClick={isClickable ? this.onTrackClick.bind(this) : null}
        >
          <Styled.PlayerPlay>
            <Button
              icon={playIcon}
              iconSize={50}
              color="transparent"
              onClick={this.onPlayerStateToggle.bind(this)}
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
                  onClick={this.onTrackClick.bind(this)}
                  ariaLabel="Share playing track..."
                />
              </Styled.PlayerMore>
            </Styled.PlayerExtra>
          )}

          {!isDisabled && (
            <Styled.PlayerProgress
              style={{
                width: (this.state.currentTime / track.duration) * 100 + '%',
              }}
            />
          )}
        </Styled.Player>

        <Modal
          isShown={this.state.isTrackModalShown}
          close={this.closeTrackModal.bind(this)}
        >
          <Modal.Content>
            <TrackModal track={track} />
          </Modal.Content>
        </Modal>
      </>
    );
  }
}
