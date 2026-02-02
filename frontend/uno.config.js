// uno.config.js - Update with these settings
import { defineConfig, presetUno, presetWebFonts, presetIcons } from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetUno(),
    presetForms(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:300,400,500,600,700',
        serif: 'Playfair Display:400,500,600',
        mono: 'Fira Code',
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  shortcuts: {
    'btn-primary': 'bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300',
    'btn-secondary': 'bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition-all duration-300',
    'btn-white': 'bg-white text-gray-800 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm',
    'section-padding': 'px-4 py-12 sm:px-6 lg:px-8 lg:py-20',
    'container-custom': 'max-w-7xl mx-auto',
    'card-hover': 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
    'nav-link': 'text-gray-700 hover:text-primary-600 font-medium transition-colors',
  }
})