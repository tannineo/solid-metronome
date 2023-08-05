import { persistentAtom } from '@nanostores/persistent'
import { action } from 'nanostores'

import { DEFAULT_BPM, MAX_BPM, MIN_BPM, PERSIST_KEYS } from '../consts'

export const p$bpm = persistentAtom<number>(PERSIST_KEYS.BPM, DEFAULT_BPM, {
  encode: (value: number): string => {
    return value.toString()
  },
  decode: (value: string): number => {
    try {
      return parseInt(value)
    } catch (err) {
      return DEFAULT_BPM
    }
  },
})

export const actionSetBpm = action(p$bpm, 'actionSetBpm', (store, targetBpm) => {
  const floored = Math.floor(targetBpm)

  if (floored < MIN_BPM || floored > MAX_BPM) {
    return store.get()
  }

  store.set(floored)

  return store.get()
})
