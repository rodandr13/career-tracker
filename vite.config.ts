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
  assetsInclude: ['**/*.css', '**/*.png', '**/*.jpg', '**/*.svg', '**/*.ico', '**/*.woff', '**/*.woff2'],
})
