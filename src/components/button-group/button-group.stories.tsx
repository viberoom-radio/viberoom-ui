import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { ButtonGroup } from './button-group';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  args: {
    isStacked: false,
  },
  render({ ...props }) {
    return (
      <ButtonGroup {...props}>
        <Button href="#">Button 1</Button>
        <Button href="#">Button 2</Button>
        <Button href="#">Button 3</Button>
      </ButtonGroup>
    );
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {};

export const Stacked: Story = {
  args: {
    isStacked: true,
  },
};
