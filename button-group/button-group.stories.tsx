import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'shared/ui/button';
import { ButtonGroup } from './button-group';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Shared/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    // color: {
    //   control: 'color',
    // },
  },
  render({ ...props }) {
    return (
      <ButtonGroup {...props}>
        <Button href="#">Button</Button>
        <Button href="#">Button</Button>
      </ButtonGroup>
    );
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {},
};

export const Stacked: Story = {
  args: {
    isStacked: true,
  },
};
