module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#111827', 
        'surface': '#1F2937',   
        'primary': '#EC4899',    
        'primary-hover': '#F472B6',
        'secondary': '#6B7280',
        'accent': '#A855F7',     
        'text-main': '#F9FAFB',  
        'text-light': '#D1D5DB', 
      },
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
