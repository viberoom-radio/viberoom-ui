import React, { Component } from 'react';
import { PlayerContext, PlayerContextProps } from 'shared/ui/player';
import { getConfig } from './utils';
import { Props, State } from './types';
import * as Styled from './styles';

const config = getConfig();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'a-entity': any;
      'a-camera': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

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
      require('utils/aframe');
      this.setState({ appRendered: true });
    }
  }

  render() {
    const { isPlaying } = this.context as PlayerContextProps;
    const { isSmall } = this.props as Props;
    const playColor = config.icosahedron.color.active;
    const pauseColor = isSmall
      ? config.icosahedron.color.defaultMobile
      : config.icosahedron.color.default;
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
          <a-entity
            environment={`
              seed: ${config.environment.seed || 1};
              skyType: ${config.environment.skyType || 'none'};
              skyColor: ${config.environment.skyColor || '#0d1831'};
              horizonColor: ${config.environment.horizonColor || '#0d1831'};
              lighting: ${config.environment.lighting || 'distant'};
              lightPosition: ${config.environment.lightPosition || '0 0 0'};
              fog: ${config.environment.fog || 0};
              flatShading: ${config.environment.flatShading || 'false'};
              playArea: ${config.environment.playArea || 1};
              ground: ${config.environment.ground || 'none'};
              groundYScale: ${config.environment.groundYScale || 1};
              groundTexture: ${config.environment.groundTexture || 'none'};
              groundColor: ${config.environment.groundColor || '#0d1831'};
              groundColor2: ${config.environment.groundColor2 || '#0d1831'};
              dressing: ${config.environment.dressing || 'none'};
              dressingAmount: ${config.environment.dressingAmount || 0};
              dressingColor: ${config.environment.dressingColor || '#0d1831'};
              dressingScale: ${config.environment.dressingScale || 1};
              dressingVariance: ${
                config.environment.dressingVariance || '0 0 0'
              };
              dressingUniformScale: ${
                config.environment.dressingUniformScale || 'false'
              };
              dressingOnPlayArea: ${config.environment.dressingOnPlayArea || 0};
              grid: ${config.environment.grid || 'none'};
              gridColor: ${config.environment.gridColor || '#0d1831'};
              shadow: ${config.environment.shadow || 'none'};
          `}
          >
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
