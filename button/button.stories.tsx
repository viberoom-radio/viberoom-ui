import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { getIconNames } from '../icon';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: getIconNames(),
      control: {
        type: 'select',
      },
    },
  },
  args: {
    href: '#',
    color: 'primary',
    children: 'Button',
    isDisabled: false,
    isPlain: false,
    isFluid: false,
    isFluidMobile: false,
    ariaLabel: 'button',
    iconSize: 24,
  },
  render({ ...props }) {
    return <Button {...props} />;
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
