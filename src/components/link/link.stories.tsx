import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    children: 'Link',
    href: '#',
  },
  render({ ...props }) {
    return <Link {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const External: Story = {
  args: {
    href: 'https://example.com',
  },
};

export const Internal: Story = {
  args: {
    href: '/#',
  },
};
