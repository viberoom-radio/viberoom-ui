import React, { useContext, useEffect, useState } from 'react';
import { PlayerContext } from 'entities/player';
import { environmentConfig, icosahedronConfig } from './constants';
import { convertConfigToString } from './utils';
import { Props } from './types';
import * as Styled from './styles';

export const Visualizer = ({ isSmall }: Props) => {
  const { isPlaying } = useContext(PlayerContext);
  const [isAppRendered, setIsAppRendered] = useState(false);
  const playColor = icosahedronConfig.color.active;
  const pauseColor = isSmall
    ? icosahedronConfig.color.defaultMobile
    : icosahedronConfig.color.default;
  const geometryColor = isPlaying ? playColor : pauseColor;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('aframe');
      require('aframe-animation-component');
      require('aframe-environment-component');
      require('shared/utils/aframe');
    }
    setIsAppRendered(true);
  }, []);

  if (!isAppRendered) {
    return null;
  }

  return (
    <Styled.Visualizer>
      <a-scene vr-mode-ui="enabled: false" keyboard-shortcuts="enterVR: false;">
        <a-entity environment={convertConfigToString(environmentConfig)}>
          <a-entity>
            <a-camera
              wasd-controls-enabled={false}
              look-controls-enabled={false}
            />
          </a-entity>
          <a-entity star-system />
          <a-entity
            geometry={`primitive: icosahedron; radius: ${
              isSmall ? '1.1' : '1.5'
            }; detail: 1;`}
            position={`0 ${isSmall ? 1.8 : 1.5} -3`}
            material={`flatShading: true; roughness: 1; color: ${geometryColor}`}
            animation="property: rotation; easing: linear; dur: 50000; from: 0 0 0; to: 360 360 360; loop: true"
          />
        </a-entity>
      </a-scene>
    </Styled.Visualizer>
  );
};
