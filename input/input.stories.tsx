import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    defaultValue: '',
  },
  render({ ...props }) {
    return <Input {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    defaultValue: 'Value',
  },
};
