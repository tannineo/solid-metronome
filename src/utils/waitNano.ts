import type { ClientDirective } from 'astro'
import { allTasks } from 'nanostores'

const waitNano: ClientDirective = async (load, opts, el) => {
  // wait nanostore to finish init
  await allTasks()

  const hydrate = await load()
  await hydrate()
}

export default waitNano
