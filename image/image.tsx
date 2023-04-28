import React, { useEffect } from 'react';
import { PLACEHOLDER } from './config';
import { Props } from './types';
import * as Styled from './styles';

export const Image = ({
  src,
  alt,
  isSquare = true,
  isRound = false,
  placeholder = PLACEHOLDER,
}: Props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(placeholder);
  const [imageRef, setImageRef] = React.useState(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // when image is visible in the viewport + rootMargin
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                setIsLoaded(true);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
        setIsLoaded(true);
      }
    }
    return () => {
      didCancel = true;
      // On component unmount, we remove the listener
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, placeholder, src]);

  return (
    <Styled.Image isLoading={!isLoaded} isSquare={isSquare} isRound={isRound}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={alt} ref={setImageRef} loading="lazy" />
    </Styled.Image>
  );
};
