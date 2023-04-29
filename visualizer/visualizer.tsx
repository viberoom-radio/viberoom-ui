import React, { Component } from 'react';
import { PlayerContext, PlayerContextProps } from 'shared/ui/player';
import { environmentConfig, icosahedronConfig } from './constants';
import { convertConfigToString } from './utils';
import { Props, State } from './types';
import * as Styled from './styles';

/**
 * TODO: make Visualizer a functional component.
 */
export class Visualizer extends Component<Props, State> {
  static contextType = PlayerContext;

  constructor(props: Props) {
    super(props);
    this.state = {
      appRendered: false,
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      require('aframe');
      require('aframe-animation-component');
      require('aframe-environment-component');
      require('shared/utils/aframe');
      this.setState({ appRendered: true });
    }
  }

  render() {
    const { isPlaying } = this.context as PlayerContextProps;
    const { isSmall } = this.props as Props;
    const playColor = icosahedronConfig.color.active;
    const pauseColor = isSmall
      ? icosahedronConfig.color.defaultMobile
      : icosahedronConfig.color.default;
    const geometryColor = isPlaying ? playColor : pauseColor;

    if (!this.state.appRendered) {
      return null;
    }

    return (
      <Styled.Visualizer>
        <a-scene
          vr-mode-ui="enabled: false"
          keyboard-shortcuts="enterVR: false;"
        >
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
  }
}
