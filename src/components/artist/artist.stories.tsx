import type { Meta, StoryObj } from '@storybook/react'
import { artistImage } from './__mocks__/artist-image'

import { Artist } from './artist'

const meta: Meta<typeof Artist> = {
  title: 'Components/Artist',
  component: Artist,
  tags: ['autodocs'],
  args: {
    name: 'Dweeb',
    userpic: artistImage,
    size: 'default',
  },
  render({ ...props }) {
    return <Artist {...props} />
  },
}

export default meta
type Story = StoryObj<typeof Artist>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'small',
  },
}
