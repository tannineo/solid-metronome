import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['src/**/*.{js,jsx,ts,tsx,astro}'],
  },
  presets: [
    presetAttributify({
      prefix: 'u-',
      prefixedOnly: true,
    }),
    presetUno(),
  ],
  theme: {
    colors: {
      // colors from https://nipponcolors.com/
      sumi: '#1c1c1c',
      keshizumi: '#434343',
      ai: '#0d5661',
      byakuroku: '#a8d8b9',
    },
  },
})
