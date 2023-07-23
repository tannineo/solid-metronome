import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    solidJs(),
  ],
})
