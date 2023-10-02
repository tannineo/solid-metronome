import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import solidJs from '@astrojs/solid-js'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    solidJs(),
    mdx(),
  ],
  // deploy to github pages
  site: 'https://tannineo.github.io',
  base: '/solid-metronome',
})
