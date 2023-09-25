/** @jsxImportSource solid-js/h */

import clsx from 'clsx'

import BaseButton from '../base/RoundButton.solid'

import styles from './NumberInputAsText.module.css'

const BPMPreset = () => {
  return (
    <div class={clsx()} u-flex='~ row items-center'>
      <BaseButton />

      <input type='number' class={clsx(styles.customInput, '')} />
    </div>
  )
}

export default BPMPreset
