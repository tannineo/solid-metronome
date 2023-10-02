export const DEFAULT_BPM = 120
export const MIN_BPM = 20
export const MAX_BPM = 300

export const DEFAULT_BEATS_PER_LOOP = 4
export const MIN_BEATS_PER_LOOP = 2
export const MAX_BEATS_PER_LOOP = 12

export const MAX_CLAP_INTERVAL = (60 / MIN_BPM) * 1000 // ms

export const DEFAULT_VOLUME = 80
export const MIN_VOLUME = 0
export const MAX_VOLUME = 100

export enum PATTERNS {
  NOIRES = 'noires',
  CROCHES = 'croches',
  DOUBLES = 'doubles',
  TRIOLETS = 'triolets',
  SHUFFLE = 'shuffle',
}

export const PERSIST_KEY_PREFIX = 'solidMetronome:'
export const PERSIST_KEYS = {
  STRESS_FIRST_BEAT: PERSIST_KEY_PREFIX + 'stressFirstBeat',
  PATTERN: PERSIST_KEY_PREFIX + 'pattern',
  BPM: PERSIST_KEY_PREFIX + 'bpm',
  BPM_PRESETS: PERSIST_KEY_PREFIX + 'bpmPresets',
  BEATS_PER_LOOP: PERSIST_KEY_PREFIX + 'beatsPerLoop',
  VOLUME: PERSIST_KEY_PREFIX + 'volume',
}
