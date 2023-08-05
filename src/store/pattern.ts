import { persistentAtom } from '@nanostores/persistent'
import { PATTERNS } from '../consts'

export const p$pattern = persistentAtom<PATTERNS>('pattern', PATTERNS.CROCHES)
