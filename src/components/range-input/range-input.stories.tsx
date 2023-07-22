import type { Meta, StoryObj } from '@storybook/react';
import { WithControlledState } from 'shared/lib/storybook';
import { RangeInput } from './range-input';

const meta: Meta<typeof RangeInput> = {
  title: 'Shared/RangeInput',
  component: RangeInput,
  tags: ['autodocs'],
  args: {
    min: 0,
    max: 1,
    value: 0,
    step: 0.01,
  },
  decorators: [WithControlledState],
  render(props) {
    return <RangeInput {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof RangeInput>;

export const Default: Story = {};
