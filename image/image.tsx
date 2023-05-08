import * as Sentry from '@sentry/browser';
import { PLACEHOLDER } from './config';
import { Props } from './types';
import * as Styled from './styles';
import { useLazyLoad } from './hooks';
import { useRef } from 'react';

export const Image = ({
  src,
  alt,
  isSquare = true,
  isRound = false,
  placeholder = PLACEHOLDER,
}: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { isLoaded } = useLazyLoad(imageRef, placeholder);

  const onError = () => {
    imageRef.current.src = placeholder;
    Sentry.captureException(new Error(`image_load_error: "${alt}"`));
  };

  return (
    <Styled.Image isLoading={!isLoaded} isSquare={isSquare} isRound={isRound}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        ref={imageRef}
        loading="lazy"
        onError={onError}
      />
    </Styled.Image>
  );
};
