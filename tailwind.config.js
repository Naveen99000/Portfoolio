/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060A13',
          900: '#0B1120',
          850: '#0F172A',
          800: '#15203B',
          700: '#1E293B',
          600: '#334155',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        accent: {
          blue: '#38BDF8',
          electric: '#0284C7',
          emerald: '#10B981',
          amber: '#F59E0B',
          violet: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.08) 1px, transparent 0)",
      }
    },
  },
  plugins: [],
}
