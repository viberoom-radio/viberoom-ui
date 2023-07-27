import type { Meta, StoryObj } from "@storybook/react";
import { mockImage } from "./__mocks__/image";
import { Image } from "./image";
import { PLACEHOLDER } from "./config";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  args: {
    src: mockImage,
    alt: "Alternative text",
    isSquare: true,
    isRound: false,
    placeholder: PLACEHOLDER,
  },
  render({ ...props }) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};

export const Round: Story = {
  args: {
    isRound: true,
  },
};
