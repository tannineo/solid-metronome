import { persistentAtom } from '@nanostores/persistent'
import { action } from 'nanostores'

import {
  DEFAULT_BEATS_PER_LOOP,
  MAX_BEATS_PER_LOOP,
  MIN_BEATS_PER_LOOP,
  PERSIST_KEYS,
} from '../consts'

export const p$beatsPerLoop = persistentAtom<number>(
  PERSIST_KEYS.BEATS_PER_LOOP,
  DEFAULT_BEATS_PER_LOOP,
  {
    encode: (value: number): string => {
      return value.toString()
    },
    decode: (value: string): number => {
      try {
        return parseInt(value)
      } catch (err) {
        return DEFAULT_BEATS_PER_LOOP
      }
    },
  },
)

export const actionSetBeatsPerLoop = action(
  p$beatsPerLoop,
  'actionSetBeatsPerLoop',
  (store, targetBPL) => {
    const floored = Math.floor(targetBPL)

    if (floored < MIN_BEATS_PER_LOOP || floored > MAX_BEATS_PER_LOOP) {
      return store.get()
    }

    store.set(floored)

    return store.get()
  },
)
