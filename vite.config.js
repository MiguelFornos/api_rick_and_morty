import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://MiguelFornos.github.io/api_rick_and_morty/",
  plugins: [react()],
})
