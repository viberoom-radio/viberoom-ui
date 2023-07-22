export type Props = {
  isSmall?: boolean;
};

export type State = {
  appRendered: boolean;
};

export type EnvironmentConfig = {
  active: boolean;
  seed: number;
  lighting: 'none' | 'distant' | 'point';
  lightPosition: string;
  fog: number | null;
  flatShading: boolean;
  playArea: number;
  ground: 'none' | 'flat' | 'hills' | 'canyon' | 'spikes' | 'noise';
  groundYScale: number;
  groundTexture: 'none' | 'checkerboard' | 'squares' | 'walkernoise';
  groundColor: string;
  groundColor2: string;
  dressing:
    | 'none'
    | 'cubes'
    | 'pyramids'
    | 'cylinders'
    | 'towers'
    | 'mushrooms'
    | 'trees'
    | 'apparatus'
    | 'torii';
  dressingAmount: number;
  dressingColor: string;
  dressingScale: number;
  dressingVariance: string;
  dressingUniformScale: boolean;
  dressingOnPlayArea: number;
  grid: 'none' | '1x1' | '2x2' | 'crosses' | 'dots' | 'xlines' | 'ylines';
  gridColor: string;
  shadow: boolean;
  skyType: 'none' | 'color' | 'gradient' | 'atmosphere';
  skyColor: string;
  horizonColor: string;
};

export type IcosahedronConfig = {
  material: string;
  color: {
    default: string;
    defaultMobile: string;
    active: string;
  };
};
