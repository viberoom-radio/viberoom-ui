import { Button } from 'shared/ui/button';
import { ButtonGroup } from 'shared/ui/button-group';
import { Icon } from 'shared/ui/icon';
import { Props } from './types';

export const Socials = ({ socials }: Props) => (
  <ButtonGroup>
    {socials.bandcamp_url && (
      <Button
        icon={<Icon name="Bandcamp" />}
        href={socials.bandcamp_url}
        isFluidMobile
      >
        Bandcamp
      </Button>
    )}
    {socials.spotify_url && (
      <Button
        icon={<Icon name="SpotifyFilled" />}
        href={socials.spotify_url}
        isFluidMobile
      >
        Spotify
      </Button>
    )}
    {socials.instagram_url && (
      <Button
        icon={<Icon name="Instagram" />}
        href={socials.instagram_url}
        isFluidMobile
      >
        Instagram
      </Button>
    )}
    {socials.soundcloud_url && (
      <Button
        icon={<Icon name="Soundcloud" />}
        href={socials.soundcloud_url}
        isFluidMobile
      >
        SoundCloud
      </Button>
    )}
    {socials.audius_url && (
      <Button
        icon={<Icon name="Audius" />}
        href={socials.audius_url}
        isFluidMobile
      >
        Audius
      </Button>
    )}
    {socials.mixcloud_url && (
      <Button
        icon={<Icon name="Mixcloud" />}
        href={socials.mixcloud_url}
        isFluidMobile
      >
        Mixcloud
      </Button>
    )}
  </ButtonGroup>
);
