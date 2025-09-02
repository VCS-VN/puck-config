/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    // './src/styles/editor-content.css'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['JetBrains Mono', ...fontFamily.mono],
    },
    extend: {
      colors: {
        brand: {
          50:  '#f0f6ff',
          100: '#d9eaff',
          200: '#b3d4ff',
          300: '#80b9ff',
          400: '#4d9eff',
          500: '#1d82ff',
          600: '#0066e6',
          700: '#004fb4',
          800: '#003b82',
          900: '#002857',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.800'),
            fontFamily: theme('fontFamily.sans').join(','),
            a: {
              color: theme('colors.brand.600'),
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': { color: theme('colors.brand.500') }
            },
            h1: {
              fontWeight: '700',
              lineHeight: '1.15',
              fontSize: theme('fontSize.4xl')[0],
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
            },
            h2: {
              fontWeight: '600',
              fontSize: theme('fontSize.3xl')[0],
              marginTop: '2.25rem',
              marginBottom: '1rem',
            },
            h3: {
              fontWeight: '600',
              fontSize: theme('fontSize.2xl')[0],
              marginTop: '2rem',
              marginBottom: '.75rem',
            },
            h4: {
              fontWeight: '600',
              fontSize: theme('fontSize.xl')[0],
              marginTop: '1.75rem',
              marginBottom: '.5rem',
            },
            h5: {
              '@apply text-xl font-medium mt-4 mb-2': {} ,
              fontWeight: '600',
              // unicode-bidi: isolate;
            },
            strong: { '@apply font-bold': {} },
            em: { '@apply italic': {} },
            p: { marginTop: '1rem', marginBottom: '1rem' },
            'ul,ol': {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.25rem',
            },
            li: { marginTop: '.25rem', marginBottom: '.25rem' },
            blockquote: {
              fontStyle: 'italic',
              color: theme('colors.gray.600'),
              borderLeft: `4px solid ${theme('colors.gray.300')}`,
              paddingLeft: '1rem',
              margin: '1.5rem 0',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: theme('borderRadius.sm'),
              fontSize: theme('fontSize.sm')[0],
              fontFamily: theme('fontFamily.mono').join(','),
            },
            'pre code': {
              background: 'transparent',
              padding: 0,
              fontSize: 'inherit',
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              padding: '1rem',
              borderRadius: theme('borderRadius.lg'),
              fontSize: theme('fontSize.sm')[0],
              lineHeight: '1.4',
              overflowX: 'auto',
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
              margin: '1.5rem auto',
            },
            table: {
              width: '100%',
              fontSize: theme('fontSize.sm')[0],
            },
            th: {
              fontWeight: '600',
              backgroundColor: theme('colors.gray.100'),
              padding: '.5rem .75rem',
            },
            td: {
              padding: '.5rem .75rem',
              borderTop: `1px solid ${theme('colors.gray.200')}`,
            },
          },
        },
        wide: {
          css: {
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.200'),
            a: { color: theme('colors.brand.300'), '&:hover': { color: theme('colors.brand.200') } },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeft: `4px solid ${theme('colors.gray.600')}`,
            },
            code: { backgroundColor: theme('colors.gray.800'), color: theme('colors.gray.100') },
            pre: { backgroundColor: theme('colors.gray.800') },
            th: { backgroundColor: theme('colors.gray.800') },
            td: { borderTop: `1px solid ${theme('colors.gray.700')}` },
          }
        }
      })
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    function createDesignTokens({ addBase, theme }) {
      addBase({
        ':root': {
          '--fs-h1': theme('fontSize.4xl')[0],
          '--fs-h2': theme('fontSize.3xl')[0],
          '--fs-h3': theme('fontSize.2xl')[0],
          '--color-brand': theme('colors.brand.600'),
        },
        '.dark': {
          '--color-brand': theme('colors.brand.300'),
        }
      });
    }
  ],
  safelist: [
    'prose', 'prose-wide', 'prose-invert',
    { pattern: /format(-\w+)?/ },
  ],
  corePlugins: {
    preflight: false, // Disable Preflight reset
  },
};
