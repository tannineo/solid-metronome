export const DEVAULT_BPM = 120
export const MIN_BPM = 20
export const MAX_BPM = 300

export const MAX_CLAP_INTERVAL = (60 / MIN_BPM) * 1000 // ms

export enum PATTERNS {
  NOIRES = 'noires',
  CROCHES = 'croches',
  DOUBLES = 'doubles',
  TRIOLETS = 'triolets',
  SHUFFLE = 'shuffle',
}
