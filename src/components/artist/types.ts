export type Props = {
  userpic: string;
  name: string;
  size?: 'default' | 'small';
};

export type StyledProps = {
  size?: Props['size'];
};
