import { map } from 'nanostores'

export interface IMetronomeStatus {
  playing: boolean
  clap: number[]
}

export const $metronomeStatus = map<IMetronomeStatus>({
  playing: false,
  clap: [],
})
