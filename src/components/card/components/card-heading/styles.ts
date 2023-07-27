import styled from 'styled-components'

export const CardHeading = styled.header`
  display: flex;
  padding: 1.5rem 1.5rem 0 1.5rem;

  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const CardTitle = styled.h2`
  width: 100%;
  margin: 0;
  font-size: 1.6rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`
