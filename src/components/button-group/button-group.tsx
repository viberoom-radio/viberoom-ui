import { Props } from './types';
import * as Styled from './styles';

export const ButtonGroup = ({ children, isStacked = false }: Props) => (
  <Styled.ButtonGroup $isStacked={isStacked}>
    {children
      .filter((node) => node !== undefined)
      .map((node, index) => (
        <Styled.ButtonGroupItem key={index}>{node}</Styled.ButtonGroupItem>
      ))}
  </Styled.ButtonGroup>
);
