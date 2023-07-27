import type { ChangeEvent } from 'react'

export type Args = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value?: number | string
}
