/** @jsxImportSource solid-js/h */

import { actionClapIt } from '../../store/metronomeStatus'
import RoundButton from '../base/RoundButton.solid'

const ClapButton = () => {
  return (
    <RoundButton onClick={() => actionClapIt()}>
      <div class='i-mdi-hand-clap text-6xl' />
    </RoundButton>
  )
}

export default ClapButton
