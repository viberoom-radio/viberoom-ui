import React from 'react';
import * as Icons from './components';
import { Props } from './types';
import { kebabCaseToPascalCase } from './utils';

export const Icon = ({ name, size = 24, color }: Props) => {
  const IconElement = Icon[kebabCaseToPascalCase(name)];

  return <IconElement size={size} color={color} />;
};

Object.assign(Icon, Icons);
