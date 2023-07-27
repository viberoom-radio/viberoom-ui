import styled, { css } from 'styled-components'
import { Props } from './types'

const stackedStyles = css`
  flex-direction: column;
`

export const ButtonGroup = styled.ul<Props>`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(100% + 1rem);
  margin: -0.5rem;
  margin-bottom: 1.5rem;
  padding: 0;
  list-style: none;

  &:last-child {
    margin-bottom: -0.5rem;
  }

  ${({ isStacked }) => isStacked && stackedStyles}

  @media only screen and (max-width: 768px) {
    ${stackedStyles}
  }
`

export const ButtonGroupItem = styled.li`
  margin: 0.5rem;
`
