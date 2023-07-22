import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';

import { Card } from './card';
import { heading, longText } from './__mocks__/constants';

const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    align: 'left',
    isPrimary: false,
    children: (
      <Card.Body>
        <p>{longText}</p>
      </Card.Body>
    ),
  },
  render(props) {
    return <Card {...props} />;
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    isPrimary: true,
  },
};

export const Centered: Story = {
  args: {
    align: 'center',
  },
};

export const WithHeading: Story = {
  args: {
    children: (
      <>
        <Card.Heading>{heading}</Card.Heading>
        <Card.Body>{longText}</Card.Body>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <Card.Body>{longText}</Card.Body>
        <Card.Footer>
          <Button href="#" isFluid>
            Button
          </Button>
        </Card.Footer>
      </>
    ),
  },
};
