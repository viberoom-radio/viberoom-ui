import type { Meta, StoryObj } from "@storybook/react";
import { RichText } from "./rich-text";
import { fixture } from "./__mocks__/constants";

const meta: Meta<typeof RichText> = {
  title: "Components/RichText",
  component: RichText,
  tags: ["autodocs"],
  args: {
    value: fixture,
  },
  render({ ...props }) {
    return <RichText {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof RichText>;

export const Default: Story = {};
