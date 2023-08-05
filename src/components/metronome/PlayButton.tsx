import { Accessor, Show } from 'solid-js'

import BaseButton from './BaseButton.tsx'

const PlayButton = ({
  playing,
  onClickToPlay,
  onClickToPause,
}: {
  playing: Accessor<boolean>
  onClickToPlay: () => any
  onClickToPause: () => any
}) => {
  return (
    <Show
      when={playing()}
      fallback={
        <BaseButton onClick={onClickToPlay}>
          <div class='i-mdi-play text-6xl' />
        </BaseButton>
      }
    >
      <BaseButton onClick={onClickToPause}>
        <div class='i-mdi-pause text-6xl' />
      </BaseButton>
    </Show>
  )
}

export default PlayButton
