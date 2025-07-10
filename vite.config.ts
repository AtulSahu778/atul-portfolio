import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ['fsevents'],
      output: {
        manualChunks: undefined,
      }
    },
    commonjsOptions: {
      transformMixedEsModules: true
    },
    target: 'esnext',
    minify: 'esbuild'
  },
  optimizeDeps: {
    exclude: ['fsevents']
  },
  esbuild: {
    target: 'esnext'
  }
})