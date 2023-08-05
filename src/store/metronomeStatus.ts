import { map, action } from 'nanostores'

import { MAX_CLAP_INTERVAL } from '../consts'

export interface IMetronomeStatus {
  playing: boolean
  claps: number[]
}

export const $metronomeStatus = map<IMetronomeStatus>({
  playing: false,
  claps: [],
})

export const actionClapIt = action($metronomeStatus, 'actionClapIt', store => {
  const metronomeStatus = store.get()
  const timeNow = Date.now()

  if (metronomeStatus.claps.length <= 0) {
    store.set({
      ...metronomeStatus,
      claps: [timeNow],
    })
  } else if (
    timeNow - metronomeStatus.claps[metronomeStatus.claps.length - 1] >
    MAX_CLAP_INTERVAL
  ) {
    store.set({
      ...metronomeStatus,
      claps: [timeNow],
    })
  } else {
    store.set({
      ...metronomeStatus,
      claps: [...metronomeStatus.claps, timeNow],
    })
  }
  console.log('actionClapIt: $metronomeStatus: ', store.get())

  return store.get()
})
