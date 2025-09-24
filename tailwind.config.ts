import type { Config } from 'tailwindcss';

const config: Config = {
  // Paths to all of your template files
  content: [
    './src/**/*.{html,ts,tsx,js,jsx,mdx}', // Adjust to your project structure
  ],
  darkMode: 'class', // Add dark mode configuration

  // Extend the default theme
  theme: {
    extend: {
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
      backgroundColor: {
        DEFAULT: 'hsl(var(--background))',
      },
      textColor: {
        DEFAULT: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },

  // Plugins
  plugins: [
    // Example: require('@tailwindcss/forms'), etc.
  ],
};

export default config;
