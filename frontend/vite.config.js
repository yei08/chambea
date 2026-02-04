import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 🌐 Escucha en todas las interfaces de red
    port: 5173,
    watch: {
      usePolling: true, // 🔄 Necesario para detectar cambios en archivos dentro de Docker
    },
  },
})