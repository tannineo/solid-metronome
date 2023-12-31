/** @jsxImportSource solid-js */

import clsx from 'clsx'
import { useStore } from '@nanostores/solid'

import { actionSetBpm, p$bpm } from '../../store/bpm.ts'
import RoundButton from '../base/RoundButton.solid.tsx'
import { MAX_BPM, MIN_BPM } from '../../consts.ts'

import styles from './customInput.module.css'

const BPMInput = _props => {
  // default value
  const minBpm = MIN_BPM
  const maxBpm = MAX_BPM

  const bpm = useStore(p$bpm)

  const setBpm = (value: number) => {
    actionSetBpm(value)
  }

  const inputNumberHandler = e => {
    let value = parseInt(e.target.value)
    if (isNaN(value)) {
      value = minBpm
    } else if (value < minBpm) {
      value = minBpm
    } else if (value > maxBpm) {
      value = maxBpm
    }

    setBpm(value)
  }

  return (
    <div class='w-full' u-flex='~ col items-center justify-center'>
      <div
        class='w-full max-w-screen-sm py-0 px-4 md:py-4'
        u-flex='~ row items-center justify-center'
      >
        <input
          class={clsx(
            'outline-none ring-none rounded-md bg-keshizumi p-2 w-40 h-16 md:w-60 md:h-24',
            styles.customInput,
          )}
          u-text='3xl md:6xl center byakuroku'
          value={bpm()}
          type='number'
          min={minBpm}
          max={maxBpm}
          onChange={inputNumberHandler}
          onFocusOut={inputNumberHandler}
        ></input>
      </div>

      <div class='w-full p-2 md:p-4' u-flex='~ row items-center justify-center'>
        <div>
          <RoundButton
            mini
            onClick={() => {
              let value = bpm() - 1
              value = value < minBpm ? minBpm : value
              setBpm(value)
            }}
          >
            <span class='text-2xl'>-</span>
          </RoundButton>
        </div>

        <input
          class='w-full'
          value={bpm()}
          type='range'
          min={minBpm}
          max={maxBpm}
          onInput={e => {
            setBpm(parseInt(e.target.value))
          }}
        ></input>

        <div>
          <RoundButton
            mini
            onClick={() => {
              let value = bpm() + 1
              value = value > maxBpm ? maxBpm : value
              setBpm(value)
            }}
          >
            <span class='text-2xl'>+</span>
          </RoundButton>
        </div>
      </div>
    </div>
  )
}

export default BPMInput
