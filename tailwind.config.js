module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Nueva paleta de colores más moderna y luminosa
      colors: {
        'background': '#111827', // Un gris azulado oscuro en lugar de negro puro
        'surface': '#1F2937',    // Un gris ligeramente más claro para las superficies como las tarjetas
        'primary': '#EC4899',    // Un rosa vibrante (fluo)
        'primary-hover': '#F472B6', // Un rosa más claro para el hover
        'secondary': '#6B7280',  // Un gris medio para texto secundario
        'accent': '#A855F7',     // Un acento violeta para complementar
        'text-main': '#F9FAFB',  // Texto principal casi blanco
        'text-light': '#D1D5DB', // Texto secundario más claro
      },
      // Definición de animaciones personalizadas
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        backgroundPan: {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '100% 50%' },
        }
      },
      // Asignación de las animaciones para poder usarlas con `animate-`
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'background-pan': 'backgroundPan 3s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}