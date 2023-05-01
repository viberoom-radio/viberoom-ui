import { createContext } from 'react';
import { PlayerContextProps } from './types';

export const PlayerContext = createContext<PlayerContextProps>(null);
