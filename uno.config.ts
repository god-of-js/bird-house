import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#5051F9',
      gray: {
        500: 'rgba(255, 255, 255, 0.40)',
        700: '#1E1F25',
        900: '#131517',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        poppins: 'Poppins',
      },
    }),
  ],
})
