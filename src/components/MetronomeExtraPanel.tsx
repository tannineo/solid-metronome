/** @jsxImportSource react */

import { useStore } from '@nanostores/react'
import { MAX_VOLUME, MIN_VOLUME } from '../consts'
import { actionSetVolume, p$volume } from '../store/volume'
import { useEffect } from 'react'
import { changeVolume } from '../sounds'

/** @jsx react-jsx */
const MetronomeExtraPanel = () => {
  const volume = useStore(p$volume)

  useEffect(() => {
    changeVolume(volume)
  }, [volume])

  return (
    <div className='w-full flex flex-col rounded-md border border-byakuroku p-4 text-shironeri'>
      <h2 className='w-full text-center text-lg'>
        Metronome Extra Panel <span className='text-xs'>in React</span>
      </h2>

      <label>Volume:</label>

      <input
        className='w-full'
        value={volume}
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

export default MetronomeExtraPanel
