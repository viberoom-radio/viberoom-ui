import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Shared/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    name: 'Dweeb',
  },
  render() {
    return <Badge />;
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
