import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
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
