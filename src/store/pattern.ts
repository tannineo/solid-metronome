import { persistentAtom } from '@nanostores/persistent'
import { PATTERNS, PERSIST_KEYS } from '../consts'

export const p$pattern = persistentAtom<PATTERNS>(PERSIST_KEYS.PATTERN, PATTERNS.CROCHES)
