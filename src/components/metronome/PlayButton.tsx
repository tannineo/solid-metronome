import { Accessor, Show } from 'solid-js'

import BaseButton from './BaseButton.tsx'

const PlayButton = (props: {
  playing: boolean
  onClickToPlay: () => any
  onClickToPause: () => any
}) => {
  return (
    <Show
      when={props.playing}
      fallback={
        <BaseButton onClick={props.onClickToPlay}>
          <div class='i-mdi-play text-6xl' />
        </BaseButton>
      }
    >
      <BaseButton onClick={props.onClickToPause}>
        <div class='i-mdi-pause text-6xl' />
      </BaseButton>
    </Show>
  )
}

export default PlayButton
