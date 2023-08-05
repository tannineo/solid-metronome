import { actionClapIt } from '../../store/metronomeStatus'
import BaseButton from '../base/RoundButton'

const ClapButton = () => {
  return (
    <BaseButton onClick={() => actionClapIt()}>
      <div class='i-mdi-hand-clap text-6xl' />
    </BaseButton>
  )
}

export default ClapButton
