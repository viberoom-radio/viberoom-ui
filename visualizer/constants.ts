import { EnvironmentConfig, IcosahedronConfig } from './types';

export const environmentConfig: EnvironmentConfig = {
  active: true,
  seed: 1,
  lighting: 'distant',
  lightPosition: '-0.72 0.53 0.97',
  fog: null,
  flatShading: true,
  playArea: 1,
  ground: 'hills',
  groundYScale: 1,
  groundTexture: 'none',
  groundColor: '#0d1831',
  groundColor2: '#0d1831',
  dressing: 'none',
  dressingAmount: 0,
  dressingColor: '#0d1831',
  dressingScale: 1,
  dressingVariance: '0 0 0',
  dressingUniformScale: false,
  dressingOnPlayArea: 0,
  grid: '1x1',
  gridColor: '#2c52a755',
  shadow: false,
  skyType: 'none',
  skyColor: '#0d1831',
  horizonColor: '#0d1831',
} as const;

export const icosahedronConfig: IcosahedronConfig = {
  material: 'normal',
  color: {
    default: '#13264c',
    defaultMobile: '#1a3d72',
    active: '#0028f0',
  },
} as const;
