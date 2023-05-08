import type { Meta, StoryObj } from '@storybook/react';
import { Icon, Icons } from 'shared/ui/icon';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    href: '#',
    color: 'primary',
    children: 'Button',
    isDisabled: false,
    isPlain: false,
    isFluid: false,
    isFluidMobile: false,
    ariaLabel: 'button',
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
    icon: <Icon name="AppleMusic" />,
  },
  argTypes: {
    icon: {
      options: Object.keys(Icons),
      mapping: Object.fromEntries(
        Object.entries(Icons).map(([name]) => [
          name,
          <Icon name={name as keyof typeof Icons} key={name} />,
        ])
      ),
    },
  },
};
