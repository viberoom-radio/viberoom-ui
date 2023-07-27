import { useRef } from "react";
import { PLACEHOLDER } from "./config";
import { Props } from "./types";
import * as Styled from "./styles";
import { useLazyLoad } from "./hooks";

export const Image = ({
  src,
  alt,
  onError,
  isSquare = true,
  isRound = false,
  placeholder = PLACEHOLDER,
}: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { isLoaded } = useLazyLoad(imageRef, placeholder);

  const handleError = () => {
    if (imageRef.current) {
      imageRef.current.src = placeholder;
    }
    /**
     * @todo pass error handler that fires a Sentry exception:
     * `Sentry.captureException(new Error(`image_load_error: "${alt}"`));`
     */
    onError?.();
  };

  return (
    <Styled.Image isLoading={!isLoaded} isSquare={isSquare} isRound={isRound}>
      <img
        src={src}
        alt={alt}
        ref={imageRef}
        loading="lazy"
        onError={handleError}
      />
    </Styled.Image>
  );
};
