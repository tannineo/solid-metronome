/** @jsxImportSource solid-js */
import { useStore } from '@nanostores/solid'
import { createEffect } from 'solid-js'

import { $metronomeStatus } from '../store/metronomeStatus.ts'
import BPMInput from './metronome/BPMInput.solid.tsx'
import PlayButton from './metronome/PlayButton.solid.tsx'
import ClapButton from './metronome/ClapButton.solid.tsx'
import { calAvgInterval } from '../utils.ts'
import { actionSetBpm } from '../store/bpm.ts'
import Toggle from './base/Toggle.solid.tsx'
import BeatsPerLoopInput from './metronome/BeatsPerLoopInput.solid.tsx'
import { p$stressFirstBeat } from '../store/stressFirstBeat.ts'
import PatternSelection from './metronome/PatternSelection.solid.tsx'
import Player from './metronome/Player.solid.tsx'
import BPMPreset from './metronome/BPMPreset.solid.tsx'
// import Volume from './metronome/Volume.solid.tsx'

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

      <div class='mx-auto' u-flex='~ row items-center justify-center'>
        <BPMPreset at={0} />
        <BPMPreset at={1} />
        <BPMPreset at={2} />
      </div>

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

      {/* <Volume /> */}
    </div>
  )
}

export default Metronome
