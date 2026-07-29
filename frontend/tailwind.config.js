export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F6FEF',
        deepBlue: '#0057D9',
        teal: '#009E9A',
        tealDark: '#008C88',
        navy: '#071B45',
        secondary: '#51617D',
        muted: '#7B8AA5',
        appBg: '#F6FAFF',
        surface: '#FFFFFF',
        border: '#DCE7F5',
        success: '#12A56A',
        warning: '#F97316',
        danger: '#EF4444'
      },
      boxShadow: {
        card: '0 18px 50px rgba(15, 111, 239, 0.08)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      }
    }
  }
};
