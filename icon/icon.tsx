import React from 'react';
import * as Icons from './components';
import { Props } from './types';
import { toCapitalCase } from './utils';

export const Icon = ({ name, size, color }: Props) => {
  const IconElement = Icon[toCapitalCase(name)];

  return <IconElement size={size} color={color} />;
};

Object.assign(Icon, Icons);
