const tailwindConfig = {
    content: ['./index.html', './styles/index.css'],
    theme: {
      extend: {
        colors: {
          'cb-blue': '#0052FF',
          'cb-gray': '#f8f8f8',
          'cb-dark': '#0a0b0d',
          'cb-blue-wash': '#f5f8ff',

          'cb-bitcoin': '#f7931a',
          'cb-ethereum': '#627EEA',
          'cb-usdc': '#2775ca',
          'cb-tether': '#22a17b',
          'cb-xrp': '#000000',
          'cb-solana': '#9945FF'
        },
        fontFamily: {
          cb: ['Lato', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }

window.tailwind = window.tailwind || {};
window.tailwind.config = tailwindConfig;

export default tailwindConfig;