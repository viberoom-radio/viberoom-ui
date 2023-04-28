export type Props = {
  src: string;
  alt: string;
  isRound?: boolean;
  isSquare?: boolean;
  placeholder?: string;
};

export type StyledProps = {
  isRound?: Props['isRound'];
  isSquare?: Props['isSquare'];
  isLoading?: boolean;
};
