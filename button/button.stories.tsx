import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // color: {
    //   control: 'color',
    // },
  },
  render({ ...props }) {
    return (
      <Button href="#" {...props}>
        Button
      </Button>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const Transparent: Story = {
  args: {
    color: 'transparent',
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'coffee',
  },
};
