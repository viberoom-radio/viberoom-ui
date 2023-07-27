import type { Meta, StoryObj } from '@storybook/react'

import { IosBadge } from './ios-badge'

const meta: Meta<typeof IosBadge> = {
  title: 'Components/IosBadge',
  component: IosBadge,
  tags: ['autodocs'],
  args: {
    url: '#',
  },
  render({ ...props }) {
    return <IosBadge {...props} />
  },
}

export default meta
type Story = StoryObj<typeof IosBadge>

export const Default: Story = {}
