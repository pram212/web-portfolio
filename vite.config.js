import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@lang': '/src/lang',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@views': '/src/views',
      '@lib': '/src/lib',
      '@plugins': '/src/plugins',
      '@public': '/public'
    }
  },
  build: {
    sourcemap: true
  }
})
