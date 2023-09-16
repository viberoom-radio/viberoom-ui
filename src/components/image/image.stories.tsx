import type { Meta, StoryObj } from '@storybook/react';
import { mockImage } from './__mocks__/image';
import { Image } from './image';
import { PLACEHOLDER } from './constants';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: mockImage,
    alt: 'Alternative text',
    isSquare: true,
    isRound: false,
    placeholder: PLACEHOLDER,
  },
  render({ ...props }) {
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
