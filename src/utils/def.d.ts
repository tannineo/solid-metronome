import 'astro'

declare module 'astro' {
  interface AstroClientDirectives {
    'client:waitnano'?: boolean
  }
}
