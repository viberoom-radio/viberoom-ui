import { Button } from 'shared/ui/button';
import { getShareMetadata } from 'shared/utils/track';
import { ShareDataExtended } from 'shared/types/share-data-extended';
import { Props } from './types';
import { ButtonGroup } from '../button-group';

export const ShareMenu = ({ track }: Props) => {
  const shareMetadata = getShareMetadata(track);
  const urlEncoded = encodeURIComponent(shareMetadata.url);
  const titleEncoded = encodeURIComponent(shareMetadata.title);
  const textEncoded = encodeURIComponent(shareMetadata.text);
  const hashtagsEncoded = encodeURIComponent(shareMetadata.hashtags);
  const pictureEncoded = encodeURIComponent(shareMetadata.picture);
  const utmSourceEncoded = encodeURIComponent(shareMetadata.utmSource);
  const openShareNative = (metadata: ShareDataExtended) =>
    window.navigator.share(metadata);
  const openShareWindow = (url: string) => {
    const windowWidth = 655;
    const windowHeight = 430;

    window.open(
      url,
      'targetWindow',
      `
        toolbar=no,
        location=no,
        status=no,
        menubar=no,
        scrollbars=yes,
        resizable=no,
        width=${windowWidth},
        height=${windowHeight},
        top=${window.document.body.offsetHeight / 2 - windowHeight / 2},
        left=${window.document.body.offsetWidth / 2 - windowWidth / 2},
      `
    );
  };

  if (window.navigator.share) {
    return (
      <Button
        icon="share"
        color="primary"
        isFluidMobile
        onClick={() => openShareNative(shareMetadata)}
      >
        Share
      </Button>
    );
  }

  return (
    <>
      <p>Share:</p>

      <ButtonGroup>
        <Button
          icon="facebook"
          isFluidMobile
          onClick={() =>
            openShareWindow(
              `https://www.facebook.com/sharer.php?src=sp&u=${urlEncoded}&title=${titleEncoded}&description=${textEncoded}&picture=${pictureEncoded}&utm_source=${utmSourceEncoded}`
            )
          }
        >
          Facebook
        </Button>
        <Button
          icon="twitter"
          isFluidMobile
          onClick={() =>
            openShareWindow(
              `https://twitter.com/intent/tweet?text=${titleEncoded}&url=${urlEncoded}&hashtags=${hashtagsEncoded}&utm_source=${utmSourceEncoded}`
            )
          }
        >
          Twitter
        </Button>
        <Button
          icon="vk"
          isFluidMobile
          onClick={() =>
            openShareWindow(
              `https://vk.com/share.php?url=${urlEncoded}&title=${titleEncoded}&description=${textEncoded}&image=${pictureEncoded}&utm_source=${utmSourceEncoded}`
            )
          }
        >
          VK
        </Button>
      </ButtonGroup>
    </>
  );
};
