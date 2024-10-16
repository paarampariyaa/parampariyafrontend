module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',  // Include mdx files if needed
    './public/index.html',
    './components/**/*.{js,jsx,ts,tsx}', // Add components directory
    './pages/**/*.{js,jsx,ts,tsx}', // Add pages directory for larger Next.js apps
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-white-black': 'radial-gradient(circle, rgba(2, 26, 64, 1) 0%, rgba(0, 5, 5, 1) 100%)',
        'radial-white-blue': 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 255, 1) 100%)',
      },
      transitionDuration: {
        '10000': '10000ms',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-in-out',
        'spin-fast': 'spin 1s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
        'spin-reverse': 'spinReverse 1.5s linear infinite',
      },
    },
  },
  plugins: [],
};
