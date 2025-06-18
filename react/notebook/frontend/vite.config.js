import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: (name) => `zarm/es/${name}/style/css`
        }
      ]
    })
  ],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'utils': path.resolve(__dirname, 'src/utils')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5174',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})