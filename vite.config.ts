import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/new-wave-vj/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          genai: ['@google/genai'],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
