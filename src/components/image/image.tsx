import { useRef } from 'react'
import { PLACEHOLDER } from './constants'
import { useLazyLoad } from './hooks'
import * as Styled from './styles'
import type { Props } from './types'

export const Image = ({
  src,
  alt,
  onError,
  isSquare = true,
  isRound = false,
  placeholder = PLACEHOLDER,
}: Props) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const { isLoaded } = useLazyLoad(imageRef, placeholder)

  const handleError = () => {
    if (imageRef.current) {
      imageRef.current.src = placeholder
    }
    onError?.()
  }

  return (
    <Styled.Image
      $isLoading={!isLoaded}
      $isSquare={isSquare}
      $isRound={isRound}
    >
      <img
        src={src}
        alt={alt}
        ref={imageRef}
        loading="lazy"
        onError={handleError}
      />
    </Styled.Image>
  )
}
