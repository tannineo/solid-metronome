import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['src/**/*.{js,jsx,ts,tsx,astro}'],
  },
  presets: [
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetUno(),
  ],
})
