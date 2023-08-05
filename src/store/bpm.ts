import { persistentAtom } from '@nanostores/persistent'
import { action } from 'nanostores'

import { DEVAULT_BPM, MAX_BPM, MIN_BPM } from '../consts'

export const p$bpm = persistentAtom<number>('bpm', DEVAULT_BPM, {
  encode: (value: number): string => {
    return value.toString()
  },
  decode: (value: string): number => {
    try {
      return parseInt(value)
    } catch (err) {
      return DEVAULT_BPM
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
