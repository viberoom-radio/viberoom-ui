import type { Meta, StoryObj } from '@storybook/react';
import image from './__mocks__/assets/image.jpeg';
import { Image } from './image';

const meta: Meta<typeof Image> = {
  title: 'Shared/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: image.src,
    alt: 'Alternative text',
    isSquare: true,
  },
  render({ ...props }) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};

export const Round: Story = {
  args: {
    isRound: true,
  },
};
