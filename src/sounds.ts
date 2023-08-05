import { Howl } from 'howler'

const Do = new Howl({
  src: ['/solid-metronome/metronome/do.ogg'],
})

const Ca = new Howl({
  src: ['/solid-metronome/metronome/ca.ogg'],
})

export const playNoires = (_interval: number, stress?: boolean) => {
  // PATTERNS.NOIRES: no need calculating interval, just for aligning the args
  if (stress) Ca.play()
  else Do.play()
}

export const playCroches = (interval: number, stress?: boolean) => {
  if (stress) Ca.play()
  else Do.play()

  setTimeout(() => {
    Do.play()
  }, interval)
}

export const playDoubles = (interval: number, stress?: boolean) => {
  if (stress) Ca.play()
  else Do.play()

  setTimeout(() => {
    Do.play()
    setTimeout(() => {
      Do.play()
      setTimeout(() => {
        Do.play()
      }, interval)
    }, interval)
  }, interval)
}

export const playTriolets = (interval: number, stress?: boolean) => {
  if (stress) Ca.play()
  else Do.play()

  setTimeout(() => {
    Do.play()
    setTimeout(() => {
      Do.play()
    }, interval)
  }, interval)
}

export const playShuffle = (interval: number, stress?: boolean) => {
  if (stress) Ca.play()
  else Do.play()

  setTimeout(() => {
    Do.play()
  }, interval)
}

export const playMap = {
  noires: playNoires,
  croches: playCroches,
  doubles: playDoubles,
  triolets: playTriolets,
  shuffle: playShuffle,
}
