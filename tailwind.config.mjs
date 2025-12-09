const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#13a4ec",
        "primary-alt": "#13a4ec",
        "secondary": "#FFB74D",
        "secondary-darker": "#F57C00",
        "accent": "#F5A623",
        "background-light": "#f6f7f8",
        "background-dark": "#101c22",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1a2730",
        "text-light": "#0d171b",
        "text-dark": "#f6f7f8",
        "subtext-light": "#4c809a",
        "subtext-dark": "#8fa7b5",
        "neutral-white": "#FFFFFF",
        "neutral-dark-gray": "#1f2937",
        "neutral-light-gray": "#e5e7eb",
        "status-green": "#10B981",
        "status-red": "#EF4444",
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        'full': '9999px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
