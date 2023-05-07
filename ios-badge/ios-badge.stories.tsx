import type { Meta, StoryObj } from '@storybook/react';

import { IosBadge } from './ios-badge';

const meta: Meta<typeof IosBadge> = {
  title: 'Shared/IosBadge',
  component: IosBadge,
  tags: ['autodocs'],
  args: {
    name: 'Dweeb',
  },
  render() {
    return <IosBadge />;
  },
};

export default meta;
type Story = StoryObj<typeof IosBadge>;

export const Default: Story = {};
