import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import solidJs from '@astrojs/solid-js'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    solidJs({ include: ['components/**/*.solid.tsx'] }),

    react({ include: ['components/**/*.react.tsx'] }),
  ],
  // deploy to github pages
  site: 'https://tannineo.github.io',
  base: '/solid-metronome',
})
