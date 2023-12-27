import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    proxy: {
      "/users": "http://localhost:3001",
      "/home": "http://localhost:3001",
    },
  },
})
