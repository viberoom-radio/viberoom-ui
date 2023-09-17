import type { ChangeEvent } from 'react';
import { useArgs } from '@storybook/preview-api';
import type { StoryContext, StoryFn } from '@storybook/react';
import type { Args } from './types';

export const WithControlledState = (
  Story: StoryFn,
  ctx: StoryContext<Args>
) => {
  const [, setArgs] = useArgs<Args>();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Call the provided callback
    // This is used for the Actions tab
    ctx.args.onChange?.(event);

    // Check if the component is controlled
    if (typeof ctx.args.value === 'undefined') {
      return;
    }

    // Update the arg in Storybook
    if (typeof ctx.args.value === 'number') {
      setArgs({ value: Number(value) });
    }

    setArgs({ value });
  };

  // Forward all args and overwrite onValueChange
  return <Story args={{ ...ctx.args, onChange }} />;
};
