import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    }
  },
  resolve: {
    alias: {
      components: '/src/components/',
      hooks: '/src/assets/',
      types: '/src/types/',
      assets: '/src/assets/',
    }
  }
})
