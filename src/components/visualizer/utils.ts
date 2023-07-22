import { EnvironmentConfig } from './types';

export const convertConfigToString = (config: EnvironmentConfig) => {
  return JSON.stringify(config).replaceAll('"', '').replaceAll(',', ';');
};
