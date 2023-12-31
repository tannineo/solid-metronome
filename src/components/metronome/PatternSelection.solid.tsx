/** @jsxImportSource solid-js */

import { useStore } from '@nanostores/solid'

import { PATTERNS } from '../../consts.ts'
import BlockRadioWithImage from '../base/BlockRadioWithImage.solid.tsx'
import { p$pattern } from '../../store/pattern.ts'

const onClickSetPattern = (pattern: PATTERNS) => {
  return () => {
    p$pattern.set(pattern)
  }
}

const PatternSelection = () => {
  const pattern = useStore(p$pattern)

  return (
    <fieldset class='flex flex-row items-center justify-center'>
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.NOIRES}
        imageURL='/solid-metronome/metronome/noires.png'
        checked={PATTERNS.NOIRES === pattern()}
        onClick={onClickSetPattern(PATTERNS.NOIRES)}
      />
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.CROCHES}
        imageURL='/solid-metronome/metronome/croches.png'
        checked={PATTERNS.CROCHES === pattern()}
        onClick={onClickSetPattern(PATTERNS.CROCHES)}
      />
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.DOUBLES}
        imageURL='/solid-metronome/metronome/doubles.png'
        checked={PATTERNS.DOUBLES === pattern()}
        onClick={onClickSetPattern(PATTERNS.DOUBLES)}
      />
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.TRIOLETS}
        imageURL='/solid-metronome/metronome/triolets.png'
        checked={PATTERNS.TRIOLETS === pattern()}
        onClick={onClickSetPattern(PATTERNS.TRIOLETS)}
      />
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.SHUFFLE}
        imageURL='/solid-metronome/metronome/shuffle.png'
        checked={PATTERNS.SHUFFLE === pattern()}
        onClick={onClickSetPattern(PATTERNS.SHUFFLE)}
      />
    </fieldset>
  )
}

export default PatternSelection
