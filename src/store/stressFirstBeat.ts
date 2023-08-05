import { persistentAtom } from '@nanostores/persistent'

export const p$stressFirstBeat = persistentAtom<boolean>('bpm', true, {
  encode: (value: boolean): string => {
    return value ? 'true' : 'false'
  },
  decode: (value: string): boolean => {
    return value === 'true'
  },
})
