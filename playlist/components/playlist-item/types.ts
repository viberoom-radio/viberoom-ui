import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{
  isHighlighted?: boolean;
}>;

export type StyledProps = {
  isHighlighted?: boolean;
};
