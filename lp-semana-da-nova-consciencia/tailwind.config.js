/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Paleta da campanha "Semana da Nova Consciência".
         * Extraída dos criativos em imagens-referencia/ (contact sheet + quantização)
         * e do manual de marca (public/logos/logo-fundo-*.png).
         */
        brand: {
          night: '#03062f',   // navy cósmico — fundo principal (cor dominante dos criativos)
          deep: '#0a1140',    // navy elevado — cards sobre fundo escuro
          blue: '#1028a0',    // azul institucional (swatch do manual de marca)
          blueSoft: '#203c65',// azul de brilho / nebulosa (criativos)
          gold: '#f3b100',    // amarelo da campanha (CTA, destaques)
          goldDeep: '#e0a818',// dourado do manual de marca
          ice: '#e8ecf8',     // texto claro sobre navy
          muted: '#9aa4c8',   // texto secundário sobre navy
          light: '#f4f6fb',   // fundo claro das seções de contraste
          ink: '#0b1030',     // texto escuro sobre fundo claro
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        gold: '0 10px 40px rgba(243, 177, 0, 0.35)',
        glow: '0 0 90px rgba(243, 177, 0, 0.22)',
        card: '0 24px 60px -20px rgba(3, 6, 47, 0.55)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.06)' },
        },
        shine: {
          '0%': { backgroundPosition: '-140% 0' },
          '100%': { backgroundPosition: '240% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        twinkle: 'twinkle 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 7s ease-in-out infinite',
        shine: 'shine 3.5s linear infinite',
      },
    },
  },
  plugins: [],
}
