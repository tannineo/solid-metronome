import { persistentAtom } from '@nanostores/persistent'

import { DEVAULT_BPM } from '../consts'

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
