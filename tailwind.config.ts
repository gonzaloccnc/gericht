import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0C0B08',
        primary: '#DCCA87',
        secondary: '#AAAAAA'
      },
      fontSize: {
        banner: '5.625rem',
        title: '4rem',
        subtitle: '2.813rem',
        logo: '2.75rem',
        highlight: '1.438rem',
        base: '1rem'
      },
      fontFamily: {
        openSans: 'var(--font-open-sans)',
        cormorant: 'var(--font-cormorant)',
        sans: ['var(--font-open-sans)', 'var(--font-cormorant)', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
export default config
