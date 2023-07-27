import { Image } from '../image'
import { Props } from './types'
import * as Styled from './styles'

export const Artist = ({ name, userpic, size = 'default' }: Props) => (
  <Styled.Artist size={size}>
    <Styled.ArtistUserpic>
      <Image src={userpic} alt={name} isSquare isRound />
    </Styled.ArtistUserpic>

    <Styled.ArtistInfo>
      {name && <Styled.ArtistName>{name}</Styled.ArtistName>}
    </Styled.ArtistInfo>
  </Styled.Artist>
)
