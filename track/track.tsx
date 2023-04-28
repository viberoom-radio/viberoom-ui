import React from 'react';
import { Image } from 'shared/ui/image';
import { Link } from 'shared/ui/link';
import { Props } from './types';
import * as Styled from './styles';

export const Track = ({ artist, artwork, title }: Props) => (
  <Styled.Track>
    <Styled.TrackArtwork>
      {artwork && (
        <Image
          src={artwork.small}
          key={artwork.small}
          alt={`${title} by ${artist.name}`}
        />
      )}
    </Styled.TrackArtwork>

    <Styled.TrackInfo>
      {title && <Styled.TrackTitle>{title}</Styled.TrackTitle>}

      {artist && (
        <Styled.TrackArtist>
          <Link href={`/artists/${artist.handle}`}>{artist.name}</Link>
        </Styled.TrackArtist>
      )}
    </Styled.TrackInfo>
  </Styled.Track>
);
