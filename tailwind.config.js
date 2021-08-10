module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        '111': '#11101D',
        '1d1': '#1d1b31',
        'abe': '#ABE2ED',
      },
      animation: {
        'ping-slow': 'ping 3s  cubic-bezier(0, 0, 0.2, 1) infinite;',
        'pulse-0': 'bounce 2s  infinite',
        'pulse-1': 'bounce 2.02s  infinite',
        'pulse-2': 'bounce 2.04s  infinite',
        'pulse-3': 'bounce 2.06s  infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
