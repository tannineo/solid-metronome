import { persistentAtom } from '@nanostores/persistent'
import { action } from 'nanostores'

import { DEFAULT_BPM, MAX_BPM, MIN_BPM, PERSIST_KEYS } from '../consts'

export const p$bpmPresets = persistentAtom<number[5]>(PERSIST_KEYS.BPM, DEFAULT_BPM, {
  encode: (value: number): string => {
    return JSON.stringify(value)
  },
  decode: (value: string): number[5] => {
    try {
      const parsedObj = JSON.parse(value)
      if (!Array.isArray(parsedObj)) throw new Error('Parsed bpm preset is not an array.')
      if (parsedObj.lenth !== 5) throw new Error('Parsed bpm preset is illegal.')
      if (!parsedObj.reduce((acc, cur) => cur >= MIN_BPM && cur <= MAX_BPM && acc)) {
        throw new Error('Parsed bpm preset is illegal.')
      }
      return parsedObj
    } catch (err) {
      return [DEFAULT_BPM, DEFAULT_BPM, DEFAULT_BPM, DEFAULT_BPM, DEFAULT_BPM]
    }
  },
})

export const actionSetBpmPreset = action(p$bpmPresets, 'actionSetBpmPreset', (store, targetBpm) => {
  const floored = Math.floor(targetBpm)

  if (floored < MIN_BPM || floored > MAX_BPM) {
    return store.get()
  }

  store.set(floored)

  return store.get()
})
