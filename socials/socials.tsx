import React from 'react';
import { Button } from 'shared/ui/button';
import { ButtonGroup } from 'shared/ui/button-group';
import { Props } from './types';

export const Socials = ({ socials }: Props) => (
  <ButtonGroup>
    {socials.bandcamp_url && (
      <Button icon="bandcamp" href={socials.bandcamp_url} isFluidMobile>
        Bandcamp
      </Button>
    )}
    {socials.spotify_url && (
      <Button icon="spotify-filled" href={socials.spotify_url} isFluidMobile>
        Spotify
      </Button>
    )}
    {socials.instagram_url && (
      <Button icon="instagram" href={socials.instagram_url} isFluidMobile>
        Instagram
      </Button>
    )}
    {socials.soundcloud_url && (
      <Button icon="soundcloud" href={socials.soundcloud_url} isFluidMobile>
        SoundCloud
      </Button>
    )}
    {socials.audius_url && (
      <Button icon="audius" href={socials.audius_url} isFluidMobile>
        Audius
      </Button>
    )}
    {socials.mixcloud_url && (
      <Button icon="mixcloud" href={socials.mixcloud_url} isFluidMobile>
        Mixcloud
      </Button>
    )}
  </ButtonGroup>
);
