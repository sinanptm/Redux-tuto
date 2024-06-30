/** @type {import('tailwindcss').Config} */

const fontFamily = {
  'sans': ['ui-sans-serif', 'system-ui'],
  'serif': ['ui-serif', 'Georgia'],
  'mono': ['ui-monospace', 'SFMono-Regular'],
  'display': ['Oswald'],
  'body': ['"Open Sans"'],
};

const colors = {
  black: {
    DEFAULT: '#000000', // Deep black
    light: '#27272a',  // Slightly lighter black
  },
  gold: {
    DEFAULT: '#FFE033', // Gold
    dark: '#B8860B',   // Darker shade of gold
    light: '#FFD700',  // Lighter shade of gold
  },
  white: {
    DEFAULT: '#FFFFFF', // Pure white
    dark: '#f8fafc',   // Slightly darker white for backgrounds
  },
  gray: {
    DEFAULT: '#2D3748', // Gray for dark mode
    light: '#A0AEC0',  // Light gray for borders, etc.
    dark: '#1A202C',   // Dark gray for background
  },
  blue: {
    DEFAULT: '#1E3A8A', // Deep blue
    light: '#3B82F6',  // Lighter blue for buttons and hover effects
    dark: '#1E40AF',   // Darker blue for accents
  },
  green: {
    DEFAULT: '#10B981', // Emerald green
    light: '#6EE7B7',  // Light green for hover effects
    dark: '#047857',   // Dark green for accents
  },
  red: {
    DEFAULT: '#EF4444', // Bright red
    light: '#F87171',  // Light red for hover effects
    dark: '#B91C1C',   // Dark red for accents
  },
  text: {
    DEFAULT: '#F7FAFC', // Light text for dark mode
    muted: '#A0AEC0',  // Muted text for secondary information
    dark: '#2D3748',   // Dark text for light theme
  },
};

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
