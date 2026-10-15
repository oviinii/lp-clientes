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
          night: '#0d1232',   // navy profundo dos criativos da campanha
          deep: '#141843',    // navy elevado — cards sobre fundo escuro
          royal: '#1e1ea8',   // azul royal — texto de destaque nos cards claros
          blue: '#1028a0',    // azul institucional (swatch do manual de marca)
          blueSoft: '#203c65',// azul de brilho / nebulosa (criativos)
          gold: '#f4b100',    // amarelo ouro da campanha (CTA, destaques, logo)
          goldDeep: '#d99a06',// ouro sombreado — gradientes e selo
          amber: '#8a6100',   // âmbar escuro — para TEXTO dourado sobre fundo claro (contraste)
          ice: '#eef1fa',     // texto claro sobre navy
          muted: '#aab3d6',   // texto secundário sobre navy
          light: '#f7f4ee',   // fundo claro quente das seções de contraste
          ink: '#101542',     // texto escuro sobre fundo claro
        },
      },
      fontFamily: {
        display: ['Anton', 'Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        gold: '0 10px 40px rgba(243, 177, 0, 0.35)',
        glow: '0 0 90px rgba(243, 177, 0, 0.22)',
        card: '0 24px 60px -20px rgba(3, 6, 47, 0.55)',
        'card-up': 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 24px 60px -20px rgba(3, 6, 47, 0.55)',
        vip: '0 0 0 1px rgba(243, 177, 0, 0.45), 0 30px 90px -30px rgba(243, 177, 0, 0.45)',
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
