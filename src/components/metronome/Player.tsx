import { useStore } from '@nanostores/solid'
import range from 'lodash/range'
import { For, createEffect, createSignal } from 'solid-js'

import { p$beatsPerLoop } from '../../store/beatsPerLoop'
import PlayerIndicator from './PlayerIndicator'
import { $metronomeStatus } from '../../store/metronomeStatus'
import { p$bpm } from '../../store/bpm'

let playerInterval: number | null = null

const Player = () => {
  const metronomeStatus = useStore($metronomeStatus)
  const bpm = useStore(p$bpm)
  const beatsPerLoop = useStore(p$beatsPerLoop)

  const [count, setCount] = createSignal(0) // Nth beat in a loop

  createEffect(() => {
    console.log('Player effect: begin, always clear playerInterval')
    clearInterval(playerInterval)

    if (metronomeStatus().playing) {
      console.log('Player effect: start playing')
      playerInterval = setInterval(
        () => {
          setCount((count() + 1) % beatsPerLoop())
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
