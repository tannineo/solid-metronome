import { persistentAtom } from '@nanostores/persistent'
import { PERSIST_KEYS } from '../consts'

export const p$stressFirstBeat = persistentAtom<boolean>(PERSIST_KEYS.STRESS_FIRST_BEAT, true, {
  encode: (value: boolean): string => {
    return value ? 'true' : 'false'
  },
  decode: (value: string): boolean => {
    return value === 'true'
  },
})
