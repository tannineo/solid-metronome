import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['src/**/*.{js,jsx,ts,tsx,astro,mdx}'],
  },
  presets: [
    presetAttributify({
      prefix: 'u-',
      prefixedOnly: true,
    }),
    presetUno(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    colors: {
      // colors from https://nipponcolors.com/
      sumi: '#1c1c1c',
      keshizumi: '#434343',
      ai: '#0d5661',
      byakuroku: '#a8d8b9',
      shironeri: '#fcfaf2',
    },
  },
})
