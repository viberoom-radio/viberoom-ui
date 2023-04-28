import React from 'react';
import { getDevice } from 'utils/device';
import { PlayerView } from './components/player-view';
import { PlayerContext } from './PlayerContext';

export const Player = () => {
  const { isPlaying, setIsPlaying, tracks, host } =
    React.useContext(PlayerContext);
  const device = getDevice();

  return (
    <PlayerView
      host={host}
      tracks={tracks}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      device={device}
    />
  );
};
