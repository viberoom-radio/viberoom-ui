import { PropsWithChildren } from 'react';

export type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Props = PropsWithChildren<{
  span?: ColumnWidth;
  spanSmall?: ColumnWidth;
  spanLarge?: ColumnWidth;
}>;

export type StyledProps = {
  $span?: ColumnWidth;
  $spanSmall?: ColumnWidth;
  $spanLarge?: ColumnWidth;
};
