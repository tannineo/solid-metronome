import type { AstroIntegration } from 'astro'

const astroClientWaitNanoStore: () => AstroIntegration = () => ({
  name: 'client:waitnano',
  hooks: {
    'astro:config:setup': ({ addClientDirective }) => {
      addClientDirective({
        name: 'click',
        entrypoint: './waitNano.ts',
      })
    },
  },
})

export default astroClientWaitNanoStore
