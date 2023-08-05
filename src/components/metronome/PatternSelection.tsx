import { useStore } from '@nanostores/solid'

import { PATTERNS } from '../../consts'
import BlockRadioWithImage from '../base/BlockRadioWithImage'
import { p$pattern } from '../../store/pattern'

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
        imageURL='/metronome/noires.png'
        checked={PATTERNS.NOIRES === pattern()}
        onClick={onClickSetPattern(PATTERNS.NOIRES)}
      />
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.CROCHES}
        imageURL='/metronome/croches.png'
        checked={PATTERNS.CROCHES === pattern()}
        onClick={onClickSetPattern(PATTERNS.CROCHES)}
      />
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.DOUBLES}
        imageURL='/metronome/doubles.png'
        checked={PATTERNS.DOUBLES === pattern()}
        onClick={onClickSetPattern(PATTERNS.DOUBLES)}
      />
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.TRIOLETS}
        imageURL='/metronome/triolets.png'
        checked={PATTERNS.TRIOLETS === pattern()}
        onClick={onClickSetPattern(PATTERNS.TRIOLETS)}
      />
      <BlockRadioWithImage
        name='pattern'
        value={PATTERNS.SHUFFLE}
        imageURL='/metronome/shuffle.png'
        checked={PATTERNS.SHUFFLE === pattern()}
        onClick={onClickSetPattern(PATTERNS.SHUFFLE)}
      />
    </fieldset>
  )
}

export default PatternSelection
