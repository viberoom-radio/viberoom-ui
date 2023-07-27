import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon";
import * as Icons from "./components";

const firstIconName = Object.keys(Icons)[0] as keyof typeof Icons;

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: firstIconName,
    size: 24,
    color: "#ffffff",
  },
  argTypes: {
    name: {
      options: Object.keys(Icons),
      control: {
        type: "select",
      },
    },
  },
  render({ ...props }) {
    return <Icon {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
