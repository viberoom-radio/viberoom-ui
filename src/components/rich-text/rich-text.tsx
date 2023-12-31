import { PortableText } from '@portabletext/react';
import { Link } from '../link';
import { Quote } from '../quote';
import { Props, Components } from './types';

const components: Components = {
  marks: {
    link: ({ children, value }) => <Link href={value.href}>{children}</Link>,
  },
  block: {
    blockquote: ({ children }) => <Quote>{children}</Quote>,
  },
};

export const RichText = ({ value = [] }: Props) => (
  <PortableText value={value} components={components} />
);
