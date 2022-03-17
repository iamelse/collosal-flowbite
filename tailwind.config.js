module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./public/**/*.{html, js}"
  ],
  theme: {
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      colors: {
        'text-primary': '#16FCD2',
        'card-container': '#221048',
        'pricing-card-1': '#3F2379',
        'pricing-card-2': '#233679',
        'pricing-card-3': '#792366'
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('flowbite/plugin')
  ],
}