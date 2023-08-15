import { persistentAtom } from '@nanostores/persistent'
import { action } from 'nanostores'

import { DEFAULT_VOLUME, MAX_VOLUME, MIN_VOLUME, PERSIST_KEYS } from '../consts'

export const p$volume = persistentAtom<number>(PERSIST_KEYS.VOLUME, DEFAULT_VOLUME, {
  encode: (value: number): string => {
    return value.toString()
  },
  decode: (value: string): number => {
    try {
      return parseInt(value)
    } catch (err) {
      return DEFAULT_VOLUME
    }
  },
})

export const actionSetVolume = action(p$volume, 'actionSetVolume', (store, targetVol) => {
  const floored = Math.floor(targetVol)

  if (floored < MIN_VOLUME || floored > MAX_VOLUME) {
    return store.get()
  }

  store.set(floored)

  return store.get()
})
