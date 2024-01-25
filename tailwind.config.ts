import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          0: '#ffffff',
          10: '#fefdfc',
          20: '#fdfbf8',
          30: '#fbf9f5',
          40: '#faf7f2',
          50: '#f9f5ef',
          60: '#f8f2eb',
          70: '#f7f0e8',
          80: '#f5eee5',
          90: '#f4ece1',
          100: '#f3eade',
        },
        secondary: {
          0: '#bdc6da',
          10: '#bdc6da',
          20: '#a7b3ce',
          30: '#91a1c2',
          40: '#7b8eb6',
          50: '#657baa',
          60: '#4f689d',
          70: '#395591',
          80: '#234285',
          90: '#1c356a',
          100: '#203b78',
        },
        foreground: {
          0: '#7a7a7a',
          10: '#646464',
          20: '#4e4e4e',
          30: '#383838',
          40: '#222222',
          50: '#1f1f1f',
          60: '#1b1b1b',
          70: '#181818',
          80: '#141414',
          90: '#111111',
          100: '#0e0e0e',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
