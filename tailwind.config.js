/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d195f4",
        
"secondary": "#5e8c10",
        
"accent": "#c7f25c",
        
"neutral": "#251D35",
        
"base-100": "#F9F5FA",
        
"info": "#44CAF3",
        
"success": "#18DC91",
        
"warning": "#EE8917",
        
"error": "#F54C32",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

