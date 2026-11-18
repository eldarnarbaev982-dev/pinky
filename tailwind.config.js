/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Nunito', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          light: '#FFE5DA',
        },
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        bg: '#F8F9FA',
        card: '#FFFFFF',
        ink: '#1A1A2E',
        muted: '#6C757D',
        success: '#2ECC71',
        warning: '#F39C12',
        danger: '#E74C3C',
        info: '#3498DB',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.08)',
        pop: '0 8px 30px rgba(255,107,53,0.25)',
      },
      borderRadius: {
        xl2: '16px',
      },
    },
  },
  plugins: [],
};
