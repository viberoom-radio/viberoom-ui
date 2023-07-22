import type { Meta, StoryObj } from '@storybook/react';

import { Socials } from './socials';

const meta: Meta<typeof Socials> = {
  title: 'Shared/Socials',
  component: Socials,
  tags: ['autodocs'],
  args: {
    socials: {
      spotify_url: 'https://example.com',
      instagram_url: 'https://example.com',
      soundcloud_url: 'https://example.com',
      audius_url: 'https://example.com',
      mixcloud_url: 'https://example.com',
    },
  },
  render({ ...props }) {
    return <Socials {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Socials>;

export const Default: Story = {};
