import { useStore } from '@nanostores/solid'

import { $metronomeStatus } from '../store/metronomeStatus'
import BPMInput from './metronome/BPMInput'
import PlayButton from './metronome/PlayButton'
import ClapButton from './metronome/ClapButton'
import Toggle from './metronome/Toggle'

const Metronome = () => {
  const metronomeStatus = useStore($metronomeStatus)

  return (
    <div class='w-full h-full p-8' u-flex='~ col items-center justify-center'>
      <BPMInput />

      <div class='' u-flex='~ row items-center justify-center'>
        <ClapButton />
        <PlayButton
          playing={metronomeStatus().playing}
          onClickToPlay={() => $metronomeStatus.setKey('playing', true)}
          onClickToPause={() => $metronomeStatus.setKey('playing', false)}
        />
      </div>

      <Toggle />
    </div>
  )
}

export default Metronome
