/** @jsxImportSource solid-js */

import { useStore } from '@nanostores/solid'
import range from 'lodash/range'
import { For, createEffect, createSignal, on } from 'solid-js'

import { p$beatsPerLoop } from '../../store/beatsPerLoop.ts'
import PlayerIndicator from './PlayerIndicator.solid.tsx'
import { $metronomeStatus } from '../../store/metronomeStatus.ts'
import { p$bpm } from '../../store/bpm.ts'
import { playMap } from '../../sounds.ts'
import { p$pattern } from '../../store/pattern.ts'
import { PATTERNS } from '../../consts.ts'
import { p$stressFirstBeat } from '../../store/stressFirstBeat.ts'

let playerInterval: number | null = null

const Player = () => {
  const metronomeStatus = useStore($metronomeStatus)
  const bpm = useStore(p$bpm)
  const beatsPerLoop = useStore(p$beatsPerLoop)
  const pattern = useStore(p$pattern)
  const stressFirstBeats = useStore(p$stressFirstBeat)

  const [count, setCount] = createSignal(-1) // Nth beat in a loop
  const [beatInterval, setBeatInterval] = createSignal(0)

  createEffect(() => {
    switch (pattern()) {
      case PATTERNS.CROCHES:
        setBeatInterval((60 * 1000) / bpm() / 2)
        break
      case PATTERNS.DOUBLES:
        setBeatInterval((60 * 1000) / bpm() / 4)
        break
      case PATTERNS.TRIOLETS:
        setBeatInterval((60 * 1000) / bpm() / 3)
        break
      case PATTERNS.SHUFFLE:
        setBeatInterval(((60 * 1000) / bpm() / 4) * 3)
        break
      default:
      // PATTERNS.NOIRES: no need calculating interval
    }
  })

  createEffect(() => {
    console.log('Player effect: begin, always clear playerInterval')
    clearInterval(playerInterval)

    if (metronomeStatus().playing) {
      console.log('Player effect: start playing')
      playerInterval = setInterval(
        () => {
          const nextBeat = (count() + 1) % beatsPerLoop()
          setCount(nextBeat)
          playMap[pattern()](beatInterval(), stressFirstBeats() && nextBeat === 0)
        },
        (60 * 1000) / bpm(),
      )
    }
  })

  return (
    <div class='w-full flex flex-row items-center justify-center'>
      <For each={range(beatsPerLoop())}>
        {i => {
          return <PlayerIndicator highlight={i === count()} />
        }}
      </For>
    </div>
  )
}

export default Player
