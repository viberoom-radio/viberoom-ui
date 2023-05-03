import type { Meta, StoryObj } from '@storybook/react';

import { Quote } from './quote';

const meta: Meta<typeof Quote> = {
  title: 'Shared/Quote',
  component: Quote,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima provident illum nam excepturi repudiandae in nulla soluta possimus est, doloremque alias porro, id corporis blanditiis temporibus molestias culpa animi totam.',
  },
  render({ ...props }) {
    return <Quote {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {};
