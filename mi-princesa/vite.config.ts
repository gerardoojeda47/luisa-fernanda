import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/luisa-fernanda/',
  server: {
    host: true,   // escucha en 0.0.0.0 — accesible desde cualquier dispositivo en la misma red
    port: 5173,
  },
})
