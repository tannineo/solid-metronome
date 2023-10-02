/** @jsxImportSource solid-js */

import clsx from 'clsx'
import { useStore } from '@nanostores/solid'

import { actionSetBpm } from '../../store/bpm'
import { p$bpmPresets, actionSetBpmPreset } from '../../store/bpmPresets'
import { MAX_BPM, MIN_BPM } from '../../consts'
import RoundButton from '../base/RoundButton'

import styles from './customInput.module.css'

const BPMPreset = (props: { at: number }) => {
  const bpmPresets = useStore(p$bpmPresets)

  const inputNumberHandler = e => {
    let value = parseInt(e.target.value)
    if (isNaN(value)) {
      value = MIN_BPM
    } else if (value < MIN_BPM) {
      value = MIN_BPM
    } else if (value > MAX_BPM) {
      value = MAX_BPM
    }

    actionSetBpmPreset({ targetBpm: value, at: props.at })
  }

  return (
    <div class='w-full' u-flex='~ row items-center justify-center'>
      <RoundButton
        mini
        onClick={() => {
          actionSetBpm(bpmPresets()[props.at])
        }}
      >
        <i class='w-4 i-mdi-play' />
      </RoundButton>

      <input
        class={clsx(
          'outline-none ring-none rounded-md -ml-3 bg-keshizumi p-1 w-16 h-8',
          styles.customInput,
        )}
        u-text='2xl center byakuroku'
        value={bpmPresets()[props.at]}
        type='number'
        min={MIN_BPM}
        max={MAX_BPM}
        onChange={inputNumberHandler}
        onFocusOut={inputNumberHandler}
      ></input>
    </div>
  )
}

export default BPMPreset
