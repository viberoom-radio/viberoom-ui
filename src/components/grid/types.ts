import type { PropsWithChildren } from 'react';

export type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Props = PropsWithChildren<{
  columns?: ColumnCount;
  columnsSmall?: ColumnCount;
  columnsLarge?: ColumnCount;
}>;

export type StyledProps = {
  $columns?: Props['columns'];
  $columnsSmall?: Props['columnsSmall'];
  $columnsLarge?: Props['columnsLarge'];
};
