
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space-blue': '#0F172A',
        'adventure-blue': '#2563EB',
        'cloud-white': '#F8FAFC',
        'golden-horizon': '#F59E0B',
      },
      fontFamily: {
        'sans': ["'Inter'", 'Geist Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
      },
      boxShadow: {
        'wonder': '0 4px 16px 0 rgba(15, 23, 42, 0.08)',
      },
      transitionDuration: {
        'wonder': '300ms',
      },
    },
  },
  plugins: [],
};
