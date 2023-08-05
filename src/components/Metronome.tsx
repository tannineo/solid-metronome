import { createSignal } from 'solid-js'

import BPMInput from './metronome/BPMInput'
import PlayButton from './metronome/PlayButton'
import ClapButton from './metronome/ClapButton'
import Toggle from './metronome/Toggle'

const Metronome = () => {
  const [bpm, setBpm] = createSignal(90)
  const [playing, setPlaying] = createSignal(false)

  console.log('current values: ', { bpm, playing })

  return (
    <div class='w-full h-full p-8' u-flex='~ col items-center justify-center'>
      <BPMInput bpm={bpm} setBpm={setBpm} />

      <div class='' u-flex='~ row items-center justify-center'>
        <ClapButton />
        <PlayButton
          playing={playing}
          onClickToPlay={() => setPlaying(true)}
          onClickToPause={() => setPlaying(false)}
        />
      </div>

      <Toggle />
    </div>
  )
}

export default Metronome
