import type { Meta, StoryObj } from "@storybook/react";

import { Socials } from "./socials";

const meta: Meta<typeof Socials> = {
  title: "Components/Socials",
  component: Socials,
  tags: ["autodocs"],
  args: {
    spotifyUrl: "https://example.com",
    instagramUrl: "https://example.com",
    soundcloudUrl: "https://example.com",
    audiusUrl: "https://example.com",
    mixcloudUrl: "https://example.com",
  },
  render({ ...props }) {
    return <Socials {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Socials>;

export const Default: Story = {};
