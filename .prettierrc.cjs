module.exports = {
  semi: false,
  arrowParens: 'avoid',
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: true,

  useTabs: false,
  tabWidth: 2,
  printWidth: 100,

  plugins: [require.resolve('prettier-plugin-astro')],
  astroAllowShorthand: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
