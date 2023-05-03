import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    isShown: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  render({ ...props }) {
    return <Modal {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
