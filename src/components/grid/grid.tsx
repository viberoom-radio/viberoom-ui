import { GridCell } from './components/grid-cell/grid-cell';
import { Props } from './types';
import * as Styled from './styles';

export const Grid = ({
  columns = 4,
  columnsSmall,
  columnsLarge,
  children,
}: Props) => (
  <Styled.Grid
    columns={columns}
    columnsSmall={columnsSmall}
    columnsLarge={columnsLarge}
  >
    {children}
  </Styled.Grid>
);

Grid.Cell = GridCell;
