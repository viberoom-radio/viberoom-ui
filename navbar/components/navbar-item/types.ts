import { ReactElement } from 'react';

export type Props = {
  href?: string;
  icon: ReactElement;
  text: string;
  isActive?: boolean;
};

export type StyledProps = {
  isActive?: boolean;
};
