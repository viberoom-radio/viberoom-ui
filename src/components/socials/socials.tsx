import { Button } from '../button'
import { ButtonGroup } from '../button-group'
import { Icon } from '../icon'
import { Props } from './types'

export const Socials = ({
  applemusicUrl,
  audiusUrl,
  bandcampUrl,
  instagramUrl,
  mixcloudUrl,
  soundcloudUrl,
  spotifyUrl,
}: Props) => (
  <ButtonGroup>
    {spotifyUrl && (
      <Button
        icon={<Icon name="SpotifyFilled" />}
        href={spotifyUrl}
        isFluidMobile
      >
        Spotify
      </Button>
    )}
    {applemusicUrl && (
      <Button
        icon={<Icon name="AppleMusic" />}
        href={applemusicUrl}
        isFluidMobile
      >
        Apple Music
      </Button>
    )}
    {bandcampUrl && (
      <Button icon={<Icon name="Bandcamp" />} href={bandcampUrl} isFluidMobile>
        Bandcamp
      </Button>
    )}
    {instagramUrl && (
      <Button
        icon={<Icon name="Instagram" />}
        href={instagramUrl}
        isFluidMobile
      >
        Instagram
      </Button>
    )}
    {soundcloudUrl && (
      <Button
        icon={<Icon name="Soundcloud" />}
        href={soundcloudUrl}
        isFluidMobile
      >
        SoundCloud
      </Button>
    )}
    {audiusUrl && (
      <Button icon={<Icon name="Audius" />} href={audiusUrl} isFluidMobile>
        Audius
      </Button>
    )}
    {mixcloudUrl && (
      <Button icon={<Icon name="Mixcloud" />} href={mixcloudUrl} isFluidMobile>
        Mixcloud
      </Button>
    )}
  </ButtonGroup>
)
