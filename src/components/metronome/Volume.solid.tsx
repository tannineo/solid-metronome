/** @jsxImportSource solid-js */

import { createEffect } from 'solid-js'
import { useStore } from '@nanostores/solid'

import { MAX_VOLUME, MIN_VOLUME } from '../../consts.ts'
import { actionSetVolume, p$volume } from '../../store/volume.ts'
import { changeVolume } from '../../sounds.ts'

const Volume = () => {
  const volume = useStore(p$volume)

  createEffect(() => {
    changeVolume(volume())
  })

  return (
    <div class='w-full max-w-lg flex flex-col rounded-md p-4 text-shironeri'>
      <label>Volume:</label>

      <input
        class='w-full'
        value={volume()}
        type='range'
        min={MIN_VOLUME}
        max={MAX_VOLUME}
        onChange={e => {
          actionSetVolume(parseInt(e.target.value))
        }}
      ></input>
    </div>
  )
}

export default Volume
