import type { Meta, StoryObj } from '@storybook/react';
import { TrackModal } from './track-modal';
import { trackMock } from './__mocks__/track';

const meta: Meta<typeof TrackModal> = {
  title: 'Shared/TrackModal',
  component: TrackModal,
  tags: ['autodocs'],
  render() {
    return <TrackModal track={trackMock} />;
  },
};

export default meta;
type Story = StoryObj<typeof TrackModal>;

export const Default: Story = {};
