import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
        /* Palmar specific colors */
        palmar: {
          orange: 'hsl(var(--orange))',
          red: 'hsl(var(--red))',
          gold: 'hsl(var(--gold))',
          teal: 'hsl(var(--teal))',
          brown: 'hsl(var(--brown))',
          'light-green': 'hsl(var(--light-green))',
          cream: 'hsl(var(--cream))',
          white: 'hsl(var(--white))',
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        'shimmer': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        "gradient-1": {
          "0%": { background: "radial-gradient(circle at 30% 30%, rgba(242, 157, 42, 0.4) 0%, transparent 40%)" },
          "25%": { background: "radial-gradient(circle at 30% 30%, rgba(193, 62, 56, 0.3) 0%, transparent 40%)" },
          "50%": { background: "radial-gradient(circle at 30% 30%, rgba(214, 179, 85, 0.5) 0%, transparent 40%)" },
          "75%": { background: "radial-gradient(circle at 30% 30%, rgba(48, 181, 174, 0.4) 0%, transparent 40%)" },
          "100%": { background: "radial-gradient(circle at 30% 30%, rgba(242, 157, 42, 0.4) 0%, transparent 40%)" }
        },
        "gradient-2": {
          "0%": { background: "radial-gradient(circle at 70% 70%, rgba(48, 181, 174, 0.4) 0%, transparent 40%)" },
          "25%": { background: "radial-gradient(circle at 70% 70%, rgba(242, 157, 42, 0.4) 0%, transparent 40%)" },
          "50%": { background: "radial-gradient(circle at 70% 70%, rgba(193, 62, 56, 0.3) 0%, transparent 40%)" },
          "75%": { background: "radial-gradient(circle at 70% 70%, rgba(214, 179, 85, 0.5) 0%, transparent 40%)" },
          "100%": { background: "radial-gradient(circle at 70% 70%, rgba(48, 181, 174, 0.4) 0%, transparent 40%)" }
        }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'shimmer': 'shimmer 2s infinite',
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "gradient-1": "gradient-1 10s ease-in-out infinite",
        "gradient-2": "gradient-2 8s ease-in-out infinite"
  		},
      backgroundImage: {
        'palmar-pattern-gold': "url('/textures/palmar-pattern-gold.svg')",
        'palmar-pattern-red': "url('/textures/palmar-pattern-red.svg')"
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
