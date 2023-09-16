import { RefObject, useEffect, useState } from 'react';

export const useLazyLoad = (
  imageRef: RefObject<HTMLImageElement>,
  placeholder: string
) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    const src = image?.src;
    const imageIsRendered = image !== null;
    const imageHasSource = src !== undefined;
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageIsRendered) {
      image.src = placeholder;
    }

    if (image) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // when image is visible in the viewport + rootMargin
              if (
                imageIsRendered &&
                imageHasSource &&
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                image.src = src;
                setIsLoaded(true);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(image);
      } else if (imageIsRendered && imageHasSource) {
        // Old browsers fallback
        image.src = src;
        setIsLoaded(true);
      }
    }
    return () => {
      didCancel = true;
      // On component unmount, we remove the listener
      if (observer && observer.unobserve && imageIsRendered) {
        observer.unobserve(image);
      }
    };
  }, [imageRef, placeholder]);

  return { isLoaded };
};
