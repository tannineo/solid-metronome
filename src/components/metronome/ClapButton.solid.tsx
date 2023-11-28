/** @jsxImportSource solid-js */

import { actionClapIt } from '../../store/metronomeStatus.ts'
import BaseButton from '../base/RoundButton.solid.tsx'

const ClapButton = () => {
  return (
    <BaseButton onClick={() => actionClapIt()}>
      <div class='i-mdi-hand-clap text-6xl' />
    </BaseButton>
  )
}

export default ClapButton
