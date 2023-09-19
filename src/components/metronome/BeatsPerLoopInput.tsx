/** @jsxImportSource solid-js */

import { useStore } from '@nanostores/solid'

import { MAX_BEATS_PER_LOOP, MIN_BEATS_PER_LOOP } from '../../consts'
import { actionSetBeatsPerLoop, p$beatsPerLoop } from '../../store/beatsPerLoop'
import BaseButton from '../base/RoundButton'

const BeatsPerLoopInput = _props => {
  const minBeatsPerLoop = MIN_BEATS_PER_LOOP
  const maxBeatsPerLoop = MAX_BEATS_PER_LOOP

  const beatsPerLoop = useStore(p$beatsPerLoop)

  return (
    <div class='flex flex-row items-center justify-center'>
      <div>
        <BaseButton
          mini
          onClick={() => {
            let value = beatsPerLoop() - 1
            value = value < minBeatsPerLoop ? minBeatsPerLoop : value
            actionSetBeatsPerLoop(value)
          }}
        >
          <span class='text-2xl'>-</span>
        </BaseButton>
      </div>
      <div class='text-xl text-byakuroku'>{beatsPerLoop()}</div>
      <div>
        <BaseButton
          mini
          onClick={() => {
            let value = beatsPerLoop() + 1
            value = value > maxBeatsPerLoop ? maxBeatsPerLoop : value
            actionSetBeatsPerLoop(value)
          }}
        >
          <span class='text-2xl'>+</span>
        </BaseButton>
      </div>
    </div>
  )
}

export default BeatsPerLoopInput
