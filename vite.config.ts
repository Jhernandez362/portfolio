import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project from /portfolio/ (repository name),
  // so only apply that base when building for production.
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react()],
}))
