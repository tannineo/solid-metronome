import { persistentAtom } from '@nanostores/persistent'
import { action } from 'nanostores'

import { DEFAULT_BPM, MAX_BPM, MIN_BPM, PERSIST_KEYS } from '../consts'

const DEFAULT_VALUES = [DEFAULT_BPM, DEFAULT_BPM, DEFAULT_BPM]

export const p$bpmPresets = persistentAtom<number[]>(PERSIST_KEYS.BPM_PRESETS, DEFAULT_VALUES, {
  encode: (value: number[]): string => {
    return JSON.stringify(value)
  },
  decode: (value: string): number[] => {
    try {
      const parsedObj = JSON.parse(value)
      if (!Array.isArray(parsedObj)) throw new Error('Parsed bpm preset is not an array.')
      if (parsedObj.length !== DEFAULT_VALUES.length)
        throw new Error('Parsed bpm preset is illegal.')
      if (!parsedObj.reduce((acc, cur) => cur >= MIN_BPM && cur <= MAX_BPM && acc)) {
        throw new Error('Parsed bpm preset is illegal.')
      }
      return parsedObj
    } catch (err) {
      return DEFAULT_VALUES
    }
  },
})

export const actionSetBpmPreset = action(
  p$bpmPresets,
  'actionSetBpmPreset',
  (store, { targetBpm, at }) => {
    const floored = Math.floor(targetBpm)

    const oldPresets = store.get()

    if (floored < MIN_BPM || floored > MAX_BPM) {
      return oldPresets
    }

    oldPresets[at] = floored

    const newPresets = [...oldPresets]
    newPresets[at] = floored

    store.set(newPresets)

    return store.get()
  },
)
