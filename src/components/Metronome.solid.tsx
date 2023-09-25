/** @jsxImportSource solid-js/h */

import { useStore } from '@nanostores/solid'
import { createEffect } from 'solid-js'

import { $metronomeStatus } from '../store/metronomeStatus'
import BPMInput from './metronome/BPMInput.solid'
import PlayButton from './metronome/PlayButton.solid'
import ClapButton from './metronome/ClapButton.solid'
import { calAvgInterval } from '../utils'
import { actionSetBpm } from '../store/bpm'
import Toggle from './base/Toggle.solid'
import BeatsPerLoopInput from './metronome/BeatsPerLoopInput.solid'
import { p$stressFirstBeat } from '../store/stressFirstBeat'
import PatternSelection from './metronome/PatternSelection.solid'
import Player from './metronome/Player.solid'

const Metronome = () => {
  const metronomeStatus = useStore($metronomeStatus)
  const stressFirstBeat = useStore(p$stressFirstBeat)

  createEffect(() => {
    if (metronomeStatus().claps.length >= 2) {
      // update bpm based on intervals
      const avgInterval = calAvgInterval(metronomeStatus().claps)
      actionSetBpm((60 * 1000) / avgInterval)
    }
  })

  return (
    <div class='w-full h-full p-4' u-flex='~ col items-center justify-center'>
      <BPMInput />

      <Player />

      <div class='' u-flex='~ row items-center justify-center'>
        <ClapButton />
        <PlayButton
          playing={metronomeStatus().playing}
          onClickToPlay={() => $metronomeStatus.setKey('playing', true)}
          onClickToPause={() => $metronomeStatus.setKey('playing', false)}
        />
      </div>

      <div class='flex flex-col md:flex-row items-center justify-center'>
        <div class='flex flex-row items-center justify-center'>
          <Toggle
            checked={stressFirstBeat()}
            onChange={(toggle: boolean) => p$stressFirstBeat.set(toggle)}
          />
          <span class='text-shironeri'>Stress first beats</span>
        </div>
        <BeatsPerLoopInput />
      </div>

      <PatternSelection />
    </div>
  )
}

export default Metronome
