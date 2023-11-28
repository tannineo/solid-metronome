import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import solidJs from '@astrojs/solid-js'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    solidJs({
      include: ['**/*.solid.tsx'],
    }),
    react({
      include: ['**/*.react.tsx'],
    }),
    mdx(),
  ],
  // deploy to github pages
  site: 'https://tannineo.github.io',
  base: '/solid-metronome',
})
